import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { TableCellProps } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { ComponentPropsWithoutRef, ReactElement } from "react";
import Markdown, { Components, ExtraProps } from "react-markdown";
import { JSX } from "react/jsx-runtime";
import remarkGfm from "remark-gfm";

type Tag = keyof JSX.IntrinsicElements;

// Strips react-markdown's `node` prop so it doesn't leak into MUI/DOM,
// and gives each override the correct intrinsic-element prop types.
const withoutNode =
  <T extends Tag>(
    render: (props: ComponentPropsWithoutRef<T>) => ReactElement,
  ) =>
  ({ node: _node, ...props }: ComponentPropsWithoutRef<T> & ExtraProps) =>
    render(props as unknown as ComponentPropsWithoutRef<T>);

const components: Components = {
  h1: withoutNode<"h1">((p) => (
    <Typography variant="titleBoldXL" color="textClearest" component="h1" gutterBottom {...p} />
  )),
  h2: withoutNode<"h2">((p) => (
    <Typography variant="titleBoldL" color="textClearest" component="h2" gutterBottom {...p} />
  )),
  h3: withoutNode<"h3">((p) => (
    <Typography variant="titleBoldM" color="textClearest" component="h3" gutterBottom {...p} />
  )),
  h4: withoutNode<"h4">((p) => (
    <Typography variant="titleBoldS" color="textClearest" component="h4" gutterBottom {...p} />
  )),
  p: withoutNode<"p">((p) => (
    <Typography variant="paragraphM" color="textClear" gutterBottom {...p} />
  )),

  a: withoutNode<"a">((p) => (
    <Link target="_blank" rel="noopener noreferrer" color="textClearest" {...p} />
  )),

  ul: withoutNode<"ul">((p) => (
    <Box component="ul" color="textClearest" sx={{ pl: 3, my: 1 }} {...p} />
  )),
  ol: withoutNode<"ol">((p) => (
    <Box component="ol" color="textClearest" sx={{ pl: 3, my: 1 }} {...p} />
  )),
  li: withoutNode<"li">((p) => (
    <Typography component="li" color="textClearest" variant="paragraphM" {...p} />
  )),

  blockquote: withoutNode<"blockquote">((p) => (
    <Box
      component="blockquote"
      sx={{
        m: 0,
        my: 2,
        pl: 2,
        borderLeft: 4,
        borderColor: "divider",
        color: "text.secondary",
      }}
      {...p}
    />
  )),

  hr: withoutNode<"hr">(() => <Divider sx={{ my: 2 }} />),

  // Block code: <pre><code/></pre>
  pre: withoutNode<"pre">((p) => (
    <Paper
      variant="outlined"
      component="pre"
      sx={{
        p: 2,
        my: 2,
        overflowX: "auto",
        bgcolor: "action.hover",
        "& code": { bgcolor: "transparent", p: 0 },
      }}
      {...p}
    />
  )),
  // Inline code (the reset in `pre` above handles code inside blocks)
  code: withoutNode<"code">((p) => (
    <Box
      component="code"
      sx={{
        px: 0.5,
        py: 0.25,
        borderRadius: 0.5,
        bgcolor: "action.hover",
        fontFamily: "monospace",
        fontSize: "0.875em",
      }}
      {...p}
    />
  )),

  // GFM tables
  table: withoutNode<"table">((p) => (
    <TableContainer component={Paper} variant="outlined" sx={{ my: 2 }}>
      <Table size="small" {...p} />
    </TableContainer>
  )),
  thead: withoutNode<"thead">((p) => <TableHead {...p} />),
  tbody: withoutNode<"tbody">((p) => <TableBody {...p} />),
  tr: withoutNode<"tr">((p) => <TableRow {...p} />),
  // TableCell renders <th> automatically inside TableHead
  th: withoutNode<"th">(({ align, ...p }) => (
    <TableCell
      align={(align as TableCellProps["align"]) ?? "left"}
      sx={{ fontWeight: 600 }}
      {...p}
    />
  )),
  td: withoutNode<"td">(({ align, ...p }) => (
    <TableCell align={(align as TableCellProps["align"]) ?? "left"} {...p} />
  )),

  img: withoutNode<"img">((p) => (
    <Box component="img" sx={{ maxWidth: "100%", height: "auto" }} {...p} />
  )),
};

interface MuiMarkdownProps {
  children: string;
}

const MarkdownViewer = ({ children }: MuiMarkdownProps) => {
  return (
    <div className="flex flex-col self-stretch">
      <Markdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </Markdown>
    </div>
  );
};

export default MarkdownViewer;
