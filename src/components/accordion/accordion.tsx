import { component$ } from "@builder.io/qwik";
import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  // @ts-ignore - not sure why (astro only)
} from "@qwik-ui/headless";

export default component$(() => {
  return (
    <AccordionRoot>
      <AccordionItem>
        <AccordionHeader>
          <AccordionTrigger>Title</AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>Content</AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
});
