import useFileUploadField from "./hooks/useFileUploadField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../buttons/PrimaryButton";
import Note from "../Note";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "../buttons/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { formatSize } from "@/shared/functions/file";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import ArticleIcon from "@mui/icons-material/Article";
import ClearIcon from "@mui/icons-material/Clear";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DARK_SCHEME, LIGHT_SCHEME } from "../theme/ColorScheme";
import { RADIUS } from "@/constants/Radius";
import { FieldValues } from "react-hook-form";

interface PropType<T extends FieldValues> {
  label?: string;
  onFilesChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
  visibleList?: boolean;
}

const FileUploadField = <T extends FieldValues>({
  label,
  onFilesChange,
  accept,
  multiple,
  maxSizeMB = 10,
  visibleList,
}: PropType<T>) => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const color = prefersDark ? DARK_SCHEME : LIGHT_SCHEME;

  const { files, isDragging, error, inputRef, handler } = useFileUploadField(
    maxSizeMB,
    multiple,
    onFilesChange,
    accept,
  );
  const {
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleInputChange,
    removeFile,
  } = handler;

  return (
    <Box className="flex flex-col gap-1 self-stretch w-full">
      <Typography component={"label"} variant="labelM" color="textClear">
        {label}
      </Typography>
      <Box
        onDragOver={handleDragOver}
        onDragEnter={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="p-4 flex flex-col self-stretch gap-4"
        sx={{
          border: "2px dashed",
          borderColor: isDragging ? "primary.main" : "grey.400",
          bgcolor: isDragging ? "action.hover" : color.glass.base,
          borderRadius: RADIUS.xxLarge,
          textAlign: "center",
          transition: "all 0.2s ease",
        }}
      >
        <div className="flex flex-col items-center-safe self-stretch w-full gap-2">
          <FileUploadIcon fontSize="large" />
          <Typography
            component="p"
            variant="descriptionBoldM"
            color="textClearest"
          >
            {isDragging ? "Drop document here" : "Drag & drop document here"}
          </Typography>
        </div>

        <div className="flex flex-col self-stretch w-full">
          <PrimaryButton
            variant="contained"
            onClick={() => inputRef.current?.click()}
            startIcon={<FileUploadIcon />}
            label={`${files.length === 0 ? "Browse" : "Replace"} File${multiple ? "s" : ""}`}
          />

          <Typography variant="labelM" color="textClear">
            Max file size: {maxSizeMB} MB
          </Typography>
        </div>

        <input
          ref={inputRef}
          type="file"
          hidden
          multiple={multiple}
          accept={accept}
          onChange={handleInputChange}
        />
      </Box>

      {error && (
        <Note isError variant={"noteS"}>
          {error}
        </Note>
      )}

      {visibleList && files.length > 0 && (
        <List dense sx={{ mt: 1 }}>
          {files.map((file, i) => (
            <ListItem
              key={`${file.name}-${i}`}
              secondaryAction={
                <IconButton aria-label="remove" onClick={() => removeFile(i)}>
                  <ClearIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText
                primary={file.name}
                secondary={formatSize(file.size)}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default FileUploadField;
