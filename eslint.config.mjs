import globals from "globals";
import tseslint from "typescript-eslint";


export default [
    {
        languageOptions: {
            globals: globals.node,
            parserOptions: {
                project: ["tsconfig.json"]
            }
        },
    },
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        rules: {
            "prefer-const": "off",
            "indent": ["error", 4],
            "semi": ["error", "always"],
        }
    }
];
