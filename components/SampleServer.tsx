import { getApiColors } from "@/apiClient/colors/colorsAPI";
import { Suspense } from "react";

const Body: React.FC = async () => {
  const response = await getApiColors();

  return (
    <>
      <h2>Server Component</h2>
      {response.map((color, i) => (
        <p key={i}>{color}</p>
      ))}
    </>
  );
};

const SampleServer: React.FC = async () => {
  return (
    <Suspense fallback={<div>SampleServer Loading...</div>}>
      <Body />
    </Suspense>
  );
};

export default SampleServer;
