import RenderComponent from "../components/cms/RenderComponent";
import { AgnosticCmsComponent } from "../components/cms/types";
import { getSdk } from "../sdk/sdk.config";

export default async function Page() {
  const content = await getSdk().storyblok.getContent({
    url: 'home',
  });

  function renderComponents(components: AgnosticCmsComponent[] = [], hidden = false) {
    return components.map((component) => <RenderComponent key={component._uid} item={component} hidden={hidden} />);
  }

  return (
    <main className="px-12">
      {renderComponents(content.body, true)}
    </main>
  );
}
