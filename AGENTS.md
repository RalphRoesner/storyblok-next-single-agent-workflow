<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:storyblok-rules -->

## Storyblok Rules

- **Space restriction:** All Storyblok operations are **strictly limited** to space `296347399073305`. Never read, write, or delete anything in any other space. Other spaces belong to clients with live customer websites. This is the most critical rule.
- **Rich text vs. text fields:** When a field renders multi-line / paragraph body text, always use `@storyblok/richtext` with Storyblok's `RichText` field type. For single-line content such as headlines or short text snippets, use Storyblok's plain `Text` field instead.
- **Minimize nesting depth in blocks:** When creating Storyblok blocks, keep the number of nested component levels as shallow as possible. Use the **Group** field type to combine related fields into a flat structure with a clear group name (e.g., `Hero Image`, `CTA Button`). Only use the **Blocks** field type when a parent block needs a variable number of child elements (e.g., an accordion with dynamic accordion items). In that case, each child block must be a separate entry in the block library, and the parent's Blocks field should be restricted to only allow its associated child block type.

<!-- END:storyblok-rules -->

<!-- BEGIN:nextjs-rules -->

## Next.js & Component Rules

- **Generate types after Storyblok changes:** After Storyblok blocks and components are created or modified, run `npm run prepareDev` so the types for blocks are available for the Next.js components written in TypeScript.
- **Component location:** Components should be placed in `src/components/<componentName>/<ComponentName>.tsx`.
- **Reuse first:** Always check `src/components/` for existing building blocks before creating a new component.
  - **Safe adaptation & backward compatibility:** If an existing component is adapted, ensure it remains 100% compatible with all existing consumers. Run tests or check usages (`grep`/`find`). If modifications are extensive or breaking, fork/adapt the component under a new descriptive name instead.
- **Server components by default:** Modules and presentation components are React Server Components.
  - **NO `'use server'` on components:** `'use server'` designates Server Actions, NOT Server Components.
  - **Static component declaration:** **NEVER** define sub-components or helper components inside the body of a parent component function. Define them at the top-level module scope or in dedicated files to avoid breaking React 19 state and DOM diffing.
- **Import types from Storyblok types:** Import types strictly from `.storyblok/types/296347399073305/storyblok-components` (e.g. `ModuleAccordionStoryblok`).
- **Storyblok editable & nested blocks:** Spread `storyblokEditable(blok)` on the root module element (e.g. `<Section>`) to enable Visual Editor click-to-edit. Render nested blocks with `<StoryblokServerComponent blok={nestedBlok} />`.
- **Register the component in `src/lib/storyblok.ts`:** Add the component to the `components` map inside `storyblokInit` with its exact Storyblok technical name.
- **Utility-first Tailwind CSS:** Use utility-first Tailwind CSS classes.
  - Use SCSS modules (`<ModuleName>.module.scss`) next to the component **only** if custom component-scoped styles are needed. Do not create empty style files.
  - Avoid invalid classes like `align-center` (use `items-center`).
  - Prefix text colors properly with `text-` (e.g. `text-base-text-primary`).
- **Defensive null checks:** Every optional field on `blok` must have a safe guard or fallback. Never assume nested properties exist (e.g. use `blok.image?.filename`).
  - For richtext fields, always verify with `hasVisibleRichtextContent(blok.text)` from `@/helpers/hasVisibleRichtextContent` before rendering wrappers to prevent empty DOM nodes or orphan margins.
  - Do not render empty buttons, links, or image containers when their source data is omitted.
- **Meaningful comments:** Add concise, meaningful comments on key steps, prop mappings, section ID calculations, and layout/variant decisions. Do not comment trivially on every single line; focus on architectural intent and key operations. Always write comments in English.

## Storyblok MCP Rules

1. **Search operation:** Call `mcp__plugin_storyblok_storyblok__search` (or fallback `mcp__Storyblok__search`) with keywords (e.g. `get component`, `update component`, `create component`).
2. **Describe operation:** **Always** call `mcp__plugin_storyblok_storyblok__describe` with the `operationId` before executing to confirm schemas, parameters, and the required execution tool (`execute_readonly`, `execute_mutating`, etc.).
3. **Execute tool:** Use the tool specified in `executeWith` from the describe output. Always provide `space_id: 296347399073305`.

## Strict Repository Boundary

- **NEVER** modify or inspect any other Storyblok space under any circumstances.
- **Strict Repository Boundary:** You must **NEVER** perform any tool action or file operation outside the repository root (`/Users/ralph.roesner/Projects/storyblok-next-single-agent-workflow/`), including Create, Read, Update, or Delete (CRUD) operations, or executing commands that target external directories.
- **Mandatory User Permission for Exceptions:** If an operation outside the repository is strictly necessary, you **MUST explicitly ask the user for permission first** using `AskUserQuestion`, detailing the exact path, operation, and rationale. Never proceed without explicit confirmation.
- These rules are strictly enforced. Always verify space `296347399073305` and project-local paths explicitly.

<!-- END:nextjs-rules -->
