import { defineConfig } from "orval";

export default defineConfig({
  // 任意の名前
  color_api: {
    input: {
      target: "./schemas/openapi.yaml", // OpenAPIのスキーマファイルのパス
    },
    output: {
      target: "./apiClient/colors", // 生成するファイル群のパス
      schemas: "./apiClient/schemas", // スキーマファイルのパス
      client: "react-query", // 生成するクライアントの種類
      httpClient: "fetch", // 生成するHTTPクライアントの種類
      mode: "split", // 生成するファイルを分割するか
      clean: true, // 生成するファイルをクリーンアップするか,
      // orvalで生成するmockの設定
      mock: {
        type: "msw",
        useExamples: true, // openapi.yamlのexampleをmockデータとして使用するか(ない場合はfaker.jsでmockデータが生成される)
      },
      override: {
        mutator: {
          path: "./apiClient/customFetch.ts", // カスタムfetchのパス
          name: "customFetch",
        },
        fetch: {
          includeHttpResponseReturnType: false, // false: fetchの返却値をResponseのデータの型にする
        },
        mock: {
          required: true, // 自動生成で返却されるmockデータを必須にする
        },
      },
    },
    hooks: {
      // ここは、プロジェクトで使用しているフォーマッターに合わせて設定してください
      // afterAllFilesWrite: 'prettier --write', // 例: prettier 生成したファイルを整形
      afterAllFilesWrite: "npx @biomejs/biome format --write", // 例: biome 生成したファイルを整形
    },
  },
});