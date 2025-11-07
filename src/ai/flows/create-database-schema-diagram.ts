'use server';

/**
 * @fileOverview This file defines a Genkit flow for creating a database schema diagram.
 *
 * The flow takes a canvas document as input and generates a visual database schema diagram
 * illustrating the data structure of a chat widget.
 *
 * @interface CreateDatabaseSchemaDiagramInput - The input type for the createDatabaseSchemaDiagram function.
 * @interface CreateDatabaseSchemaDiagramOutput - The output type for the createDatabaseSchemaDiagram function.
 * @function createDatabaseSchemaDiagram - The main function to create the database schema diagram.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CreateDatabaseSchemaDiagramInputSchema = z.object({
  canvasDocument: z
    .string()
    .describe("The user's canvas document containing the technical specification."),
});
export type CreateDatabaseSchemaDiagramInput = z.infer<
  typeof CreateDatabaseSchemaDiagramInputSchema
>;

const CreateDatabaseSchemaDiagramOutputSchema = z.object({
  diagramDataUri: z
    .string()
    .describe(
      'A data URI containing the visual database schema diagram (e.g., as a PNG image).'
    ),
});
export type CreateDatabaseSchemaDiagramOutput = z.infer<
  typeof CreateDatabaseSchemaDiagramOutputSchema
>;

export async function createDatabaseSchemaDiagram(
  input: CreateDatabaseSchemaDiagramInput
): Promise<CreateDatabaseSchemaDiagramOutput> {
  return createDatabaseSchemaDiagramFlow(input);
}

const createDatabaseSchemaDiagramPrompt = ai.definePrompt({
  name: 'createDatabaseSchemaDiagramPrompt',
  input: {schema: CreateDatabaseSchemaDiagramInputSchema},
  output: {schema: CreateDatabaseSchemaDiagramOutputSchema},
  prompt: `You are an expert at creating database schema diagrams.

  Based on the provided canvas document describing the architecture of a chat widget, generate a visual database schema diagram.
  The diagram should clearly illustrate the data structure, including entities, attributes, and relationships.
  Ensure that all requirements mentioned in the canvas document are reflected in the diagram.

  Canvas Document: {{{canvasDocument}}}

  Return the diagram as a data URI.
  Diagram: {{media url=diagramDataUri}}
  `,
});

const createDatabaseSchemaDiagramFlow = ai.defineFlow(
  {
    name: 'createDatabaseSchemaDiagramFlow',
    inputSchema: CreateDatabaseSchemaDiagramInputSchema,
    outputSchema: CreateDatabaseSchemaDiagramOutputSchema,
  },
  async input => {
    // TODO: Implement image generation using an image generation model
    // and return the data URI.
    // The current implementation returns a placeholder data URI.
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Database schema diagram for a chat widget described in the following document: ${input.canvasDocument}`,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate database schema diagram.');
    }

    return {diagramDataUri: media.url};
  }
);
