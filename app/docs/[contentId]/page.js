import ContentDisplay from "@/components/ContentDisplay";

export default function Contentpage({ params: { contentId } }) {
  return <ContentDisplay id={contentId} />;
}
