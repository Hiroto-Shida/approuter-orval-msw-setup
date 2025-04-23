"use client";
import { useGetApiColors } from "@/apiClient/colors/colorsAPI";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Body: React.FC = () => {
  const { data, isPending, error, isError } = useGetApiColors();

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (isPending) {
    return <p>SampleClient Loading...</p>;
  }

  return (
    <>
      <h2>Client Component</h2>
      {data.map((color, i) => (
        <p key={i}>{color}</p>
      ))}
    </>
  );
};

const SampleClient: React.FC = () => {
  // TanStack Queryを使用するためのQueryClientを作成し、QueryClientProviderでラップ
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Body />
    </QueryClientProvider>
  );
};

export default SampleClient;
