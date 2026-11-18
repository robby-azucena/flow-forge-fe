import { useCallback, useRef, useState } from "react";

const useFileUploadField = (
    maxSizeMB: number,
    multiple?: boolean,
    onFilesChange?: (files: File[]) => void,
    accept?: string,
) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string>("");

    const isAccepted = (file: File, accept?: string): boolean => {
        if (!accept) return true;
        const rules = accept
            .split(",")
            .map((r) => r.trim().toLowerCase())
            .filter(Boolean);
        const name = file.name.toLowerCase();
        const type = file.type.toLowerCase();

        return rules.some((rule) => {
            if (rule.startsWith(".")) return name.endsWith(rule);
            if (rule.endsWith("/*")) return type.startsWith(rule.slice(0, -1));
            return type === rule;
        });
    };

    const describeAccept = (accept?: string): string => {
        if (!accept) return "";
        const rules = accept
            .split(",")
            .map((r) => r.trim().toLowerCase())
            .filter(Boolean);
        const friendly = rules.filter(
            (r) => r.startsWith(".") || r.endsWith("/*"),
        );

        const labels = (friendly.length ? friendly : rules).map((r) =>
            r === "image/*" ? "images" : r.endsWith("/*") ? r.slice(0, -2) : r,
        );
        return Array.from(new Set(labels)).join(", ");
    };

    const addFiles = useCallback(
        (incoming: FileList | File[]) => {
            const list = Array.from(incoming);
            const maxBytes = maxSizeMB * 1024 * 1024;
            const valid: File[] = [];
            const wrongType: string[] = [];
            const tooLarge: string[] = [];

            list.forEach((f) => {
                if (!isAccepted(f, accept)) wrongType.push(f.name);
                else if (f.size > maxBytes) tooLarge.push(f.name);
                else valid.push(f);
            });

            const messages: string[] = [];
            if (wrongType.length) {
                const allowed = describeAccept(accept);
                messages.push(
                    `Unsupported file type. Only ${allowed} are allowed.`,
                );
            }
            if (tooLarge.length)
                messages.push(
                    `Too large (max ${maxSizeMB} MB): ${tooLarge.join(", ")}`,
                );
            setError(messages.join(" | "));

            if (!valid.length) return;

            const next = multiple ? [...files, ...valid] : [valid[0]];
            setFiles(next);
            onFilesChange?.(next);
        },
        [accept, files, maxSizeMB, multiple, onFilesChange],
    );

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        // ignore leave events fired when moving over child elements
        if (e.currentTarget.contains(e.relatedTarget as Node | null)) return;
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) addFiles(e.target.files);
        e.target.value = "";
    };

    const removeFile = (index: number) => {
        const next = files.filter((_, i) => i !== index);
        setFiles(next);
        onFilesChange?.(next);
    };

    return {
        files,
        inputRef,
        isDragging,
        error,
        handler: {
            handleDragOver,
            handleDragLeave,
            handleDrop,
            handleInputChange,
            removeFile,
        },
    };
};

export default useFileUploadField;
