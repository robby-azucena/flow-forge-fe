import { Palette, TypographyVariantsOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    // Paragraph
    paragraphXL: React.CSSProperties;
    paragraphL: React.CSSProperties;
    paragraphM: React.CSSProperties;
    paragraphS: React.CSSProperties;

    // Headline
    headlineBoldXL: React.CSSProperties;
    headlineBoldL: React.CSSProperties;
    headlineBoldM: React.CSSProperties;
    headlineBoldS: React.CSSProperties;
    headlineSemiboldXL: React.CSSProperties;
    headlineSemiboldL: React.CSSProperties;
    headlineSemiboldM: React.CSSProperties;
    headlineSemiboldS: React.CSSProperties;

    // Title
    titleBoldXL: React.CSSProperties;
    titleBoldL: React.CSSProperties;
    titleBoldM: React.CSSProperties;
    titleBoldS: React.CSSProperties;
    titleSemiboldXL: React.CSSProperties;
    titleSemiboldL: React.CSSProperties;
    titleSemiboldM: React.CSSProperties;
    titleSemiboldS: React.CSSProperties;
    titleLightXL: React.CSSProperties;
    titleLightL: React.CSSProperties;
    titleLightM: React.CSSProperties;
    titleLightS: React.CSSProperties;

    // Description
    descriptionBoldXL: React.CSSProperties;
    descriptionBoldL: React.CSSProperties;
    descriptionBoldM: React.CSSProperties;
    descriptionBoldS: React.CSSProperties;
    descriptionSemiboldXL: React.CSSProperties;
    descriptionSemiboldL: React.CSSProperties;
    descriptionSemiboldM: React.CSSProperties;
    descriptionSemiboldS: React.CSSProperties;
    descriptionRegularXL: React.CSSProperties;
    descriptionRegularL: React.CSSProperties;
    descriptionRegularM: React.CSSProperties;
    descriptionRegularS: React.CSSProperties;

    // Interaction
    interactionBoldXL: React.CSSProperties;
    interactionBoldL: React.CSSProperties;
    interactionBoldM: React.CSSProperties;
    interactionBoldS: React.CSSProperties;
    interactionSemiboldXL: React.CSSProperties;
    interactionSemiboldL: React.CSSProperties;
    interactionSemiboldM: React.CSSProperties;
    interactionSemiboldS: React.CSSProperties;
    interactionRegularXL: React.CSSProperties;
    interactionRegularL: React.CSSProperties;
    interactionRegularM: React.CSSProperties;
    interactionRegularS: React.CSSProperties;

    // Overline
    overlineXL: React.CSSProperties;
    overlineL: React.CSSProperties;
    overlineM: React.CSSProperties;
    overlineS: React.CSSProperties;

    // Label
    labelL: React.CSSProperties;
    labelM: React.CSSProperties;
    labelS: React.CSSProperties;

    // Note
    noteL: React.CSSProperties;
    noteM: React.CSSProperties;
    noteS: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    // Paragraph
    paragraphXL?: React.CSSProperties;
    paragraphL?: React.CSSProperties;
    paragraphM?: React.CSSProperties;
    paragraphS?: React.CSSProperties;

    // Headline
    headlineBoldXL?: React.CSSProperties;
    headlineBoldL?: React.CSSProperties;
    headlineBoldM?: React.CSSProperties;
    headlineBoldS?: React.CSSProperties;
    headlineSemiboldXL?: React.CSSProperties;
    headlineSemiboldL?: React.CSSProperties;
    headlineSemiboldM?: React.CSSProperties;
    headlineSemiboldS?: React.CSSProperties;

    // Title
    titleBoldXL?: React.CSSProperties;
    titleBoldL?: React.CSSProperties;
    titleBoldM?: React.CSSProperties;
    titleBoldS?: React.CSSProperties;
    titleSemiboldXL?: React.CSSProperties;
    titleSemiboldL?: React.CSSProperties;
    titleSemiboldM?: React.CSSProperties;
    titleSemiboldS?: React.CSSProperties;
    titleLightXL?: React.CSSProperties;
    titleLightL?: React.CSSProperties;
    titleLightM?: React.CSSProperties;
    titleLightS?: React.CSSProperties;

    // Description
    descriptionBoldXL?: React.CSSProperties;
    descriptionBoldL?: React.CSSProperties;
    descriptionBoldM?: React.CSSProperties;
    descriptionBoldS?: React.CSSProperties;
    descriptionSemiboldXL?: React.CSSProperties;
    descriptionSemiboldL?: React.CSSProperties;
    descriptionSemiboldM?: React.CSSProperties;
    descriptionSemiboldS?: React.CSSProperties;
    descriptionRegularXL?: React.CSSProperties;
    descriptionRegularL?: React.CSSProperties;
    descriptionRegularM?: React.CSSProperties;
    descriptionRegularS?: React.CSSProperties;

    // Interaction
    interactionBoldXL?: React.CSSProperties;
    interactionBoldL?: React.CSSProperties;
    interactionBoldM?: React.CSSProperties;
    interactionBoldS?: React.CSSProperties;
    interactionSemiboldXL?: React.CSSProperties;
    interactionSemiboldL?: React.CSSProperties;
    interactionSemiboldM?: React.CSSProperties;
    interactionSemiboldS?: React.CSSProperties;
    interactionRegularXL?: React.CSSProperties;
    interactionRegularL?: React.CSSProperties;
    interactionRegularM?: React.CSSProperties;
    interactionRegularS?: React.CSSProperties;

    // Overline
    overlineXL?: React.CSSProperties;
    overlineL?: React.CSSProperties;
    overlineM?: React.CSSProperties;
    overlineS?: React.CSSProperties;

    // Label
    labelL?: React.CSSProperties;
    labelM?: React.CSSProperties;
    labelS?: React.CSSProperties;

    // Note
    noteL?: React.CSSProperties;
    noteM?: React.CSSProperties;
    noteS?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    // Paragraph
    paragraphXL: true;
    paragraphL: true;
    paragraphM: true;
    paragraphS: true;

    // Headline
    headlineBoldXL: true;
    headlineBoldL: true;
    headlineBoldM: true;
    headlineBoldS: true;
    headlineSemiboldXL: true;
    headlineSemiboldL: true;
    headlineSemiboldM: true;
    headlineSemiboldS: true;

    // Title
    titleBoldXL: true;
    titleBoldL: true;
    titleBoldM: true;
    titleBoldS: true;
    titleSemiboldXL: true;
    titleSemiboldL: true;
    titleSemiboldM: true;
    titleSemiboldS: true;
    titleLightXL: true;
    titleLightL: true;
    titleLightM: true;
    titleLightS: true;

    // Description
    descriptionBoldXL: true;
    descriptionBoldL: true;
    descriptionBoldM: true;
    descriptionBoldS: true;
    descriptionSemiboldXL: true;
    descriptionSemiboldL: true;
    descriptionSemiboldM: true;
    descriptionSemiboldS: true;
    descriptionRegularXL: true;
    descriptionRegularL: true;
    descriptionRegularM: true;
    descriptionRegularS: true;

    // Interaction
    interactionBoldXL: true;
    interactionBoldL: true;
    interactionBoldM: true;
    interactionBoldS: true;
    interactionSemiboldXL: true;
    interactionSemiboldL: true;
    interactionSemiboldM: true;
    interactionSemiboldS: true;
    interactionRegularXL: true;
    interactionRegularL: true;
    interactionRegularM: true;
    interactionRegularS: true;

    // Overline
    overlineXL: true;
    overlineL: true;
    overlineM: true;
    overlineS: true;

    // Label
    labelL: true;
    labelM: true;
    labelS: true;

    // Note
    noteL: true;
    noteM: true;
    noteS: true;
  }
}

const HEAD_FONT_FAMILY = "var(--font-space-grotesk)"
const FONT_FAMILY = "var(--font-hanken-grotesk)";

const TYPOGRAPHY:
  | TypographyVariantsOptions
  | ((palette: Palette) => TypographyVariantsOptions) = {
  fontFamily: FONT_FAMILY,
  //NOTE - Headline
  headlineBoldXL: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "4rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  headlineBoldL: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "3.5rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  headlineBoldM: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "3rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  headlineBoldS: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "2.5rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  headlineSemiboldXL: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "4rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  headlineSemiboldL: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "3.5rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  headlineSemiboldM: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "3rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  headlineSemiboldS: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "2.5rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  //NOTE - Title
  titleBoldXL: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "3rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  titleBoldL: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "2.5rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  titleBoldM: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  titleBoldS: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  titleSemiboldXL: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "3rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  titleSemiboldL: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "2.5rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  titleSemiboldM: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  titleSemiboldS: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  titleLightXL: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "3rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },
  titleLightL: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "2.5rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },
  titleLightM: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },
  titleLightS: {
    fontFamily: HEAD_FONT_FAMILY,
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal",
  },

  //NOTE - Description
  descriptionBoldXL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  descriptionBoldL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  descriptionBoldM: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  descriptionBoldS: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  descriptionSemiboldXL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  descriptionSemiboldL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  descriptionSemiboldM: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  descriptionSemiboldS: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  descriptionRegularXL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  descriptionRegularL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  descriptionRegularM: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  descriptionRegularS: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },

  //NOTE - Overline
  overlineXL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textTransform: "uppercase",
  },
  overlineL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textTransform: "uppercase",
  },
  overlineM: {
    fontFamily: FONT_FAMILY,
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textTransform: "uppercase",
  },
  overlineS: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    textTransform: "uppercase",
  },

  //NOTE - Label
  labelL: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  labelM: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  labelS: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.625rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },

  //NOTE - Paragraph
  paragraphXL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  paragraphL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  paragraphM: {
    fontFamily: FONT_FAMILY,
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  paragraphS: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },

  //NOTE - Note
  noteL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  noteM: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  noteS: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },

  //NOTE - Interaction
  interactionBoldXL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  interactionBoldL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  interactionBoldM: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  interactionBoldS: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  interactionSemiboldXL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  interactionSemiboldL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  interactionSemiboldM: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  interactionSemiboldS: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  interactionRegularXL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  interactionRegularL: {
    fontFamily: FONT_FAMILY,
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  interactionRegularM: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  interactionRegularS: {
    fontFamily: FONT_FAMILY,
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
};

export default TYPOGRAPHY;
