# @ddddurk/ariatype

Type definitions for WAI-ARIA Accessibility.

## Installation

```bash
npm install @ddddurk/ariatype -D
# or
yarn add @ddddurk/ariatype -D
# or
pnpm add @ddddurk/ariatype -D
```

## Usage

```ts
import { AriaTypes } from "@ddddurk/ariatype";

const aria: AriaTypes = {
  aria-atomic: "true",
  role: "alert"
};
```

### Requiring Aria Attributes

A [generic type](https://www.typescriptlang.org/docs/handbook/2/generics.html) is exported to help enforce requiring specific aria attributes:

```ts
import { PartiallyRequiredAriaTypes } from "@ddddurk/ariatype";

const aria: PartiallyRequiredAriaTypes<"aria-atomic" | "role"> = {
  "aria-atomic": "true",
  role: "alert"
};
```

## Types

| Name                       | Description                         |
| -------------------------- | ----------------------------------- |
| AriaAttributes             | typed aria attributes               |
| AriaAttributesDragAndDrop  | typed drag-and-drop aria attributes |
| AriaAttributesGlobal       | typed global aria attributes        |
| AriaAttributesLiveRegion   | typed live region aria attributes   |
| AriaAttributesRelationship | typed relationship aria attributes  |
| AriaAttributesWidget       | typed widget aria attributes        |
| AriaRole                   | typed aria role                     |
| AriaRoleComposite          | typed composite aria role           |
| AriaRoleDocumentStructure  | typed document structure aria role  |
| AriaRoleLandmark           | typed landmark aria role            |
| AriaRoleLiveRegion         | typed live region aria role         |
| AriaRoleWidget             | typed widget aria role              |
| AriaRoleWindow             | typed window aria role              |

\
\
In addition, the following arrays are exported:

| Name                       | Description                            |
| -------------------------- | -------------------------------------- |
| ariaAttributes             | array of aria attributes               |
| ariaAttributesDragAndDrop  | array of drag-and-drop aria attributes |
| ariaAttributesGlobal       | array of global aria attributes        |
| ariaAttributesLiveRegion   | array of live region attributes        |
| ariaAttributesRelationship | array of relationship aria attributes  |
| ariaAttributesWidget       | array of widget aria attributes        |
| ariaRoles                  | array of aria roles                    |
| ariaRolesComposite         | array of composite aria roles          |
| ariaRolesDocumentStructure | array of document structure aria roles |
| ariaRolesLandmark          | array of landmark aria roles           |
| ariaRolesLiveRegion        | array of live region aria roles        |
| ariaRolesWidget            | array of widget aria roles             |
| ariaRolesWindow            | array of window aria roles             |

## Resources

For more resources on WAI-ARIA:

- [https://www.w3.org/WAI/standards-guidelines/aria](https://www.w3.org/WAI/standards-guidelines/aria)
- [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)
