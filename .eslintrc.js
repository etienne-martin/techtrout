module.exports = {
  ignorePatterns: ["node_modules", ".next"],
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx", "*.json"],
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:import/typescript",
        "plugin:@next/next/core-web-vitals",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:unicorn/recommended",
        "prettier",
      ],
      plugins: [
        "react",
        "@typescript-eslint",
        "prettier",
        "react-hooks",
        "import",
        "unicorn",
        "forbid-filename",
      ],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
      },
      rules: {
        "unicorn/prefer-dom-node-dataset": 0,
        "unicorn/require-post-message-target-origin": 2,
        "unicorn/prefer-string-replace-all": 2,
        "unicorn/no-unused-properties": 2,
        "unicorn/custom-error-definition": 2,
        "unicorn/no-unsafe-regex": 2,
        "unicorn/prefer-event-target": 0,
        "unicorn/consistent-function-scoping": 0,
        "unicorn/prevent-abbreviations": 0,
        "unicorn/no-null": 0,
        "unicorn/no-array-for-each": 0,
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
          },
        ],

        "@typescript-eslint/sort-type-constituents": 2,
        "@typescript-eslint/no-non-null-assertion": 2,
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          { assertionStyle: "never" },
        ],
        "@typescript-eslint/prefer-optional-chain": 2,
        "@typescript-eslint/ban-ts-comment": [
          "error",
          {
            "ts-expect-error": true,
            "ts-ignore": true,
            "ts-nocheck": true,
            "ts-check": false,
          },
        ],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "type-imports",
          },
        ],
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            functions: true,
            classes: true,
            variables: true,
            enums: true,
            typedefs: true,
          },
        ],

        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["strictCamelCase", "StrictPascalCase", "snake_case"],
            leadingUnderscore: "allow",
          },
          {
            selector: "variable",
            format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
          },
          {
            selector: ["enum", "enumMember", "typeLike"],
            format: ["StrictPascalCase"],
            leadingUnderscore: "allow",
          },
          {
            // Allows destructured properties to retain their original name
            selector: "variable",
            modifiers: ["destructured"],
            format: null,
          },
          {
            // Removes the convention for property names that requires quoting (for example, HTTP headers)
            selector: "default",
            format: null,
            modifiers: ["requiresQuotes"],
          },
        ],

        "forbid-filename/match": [
          "error",
          { patterns: [/\.d\.ts$/], ignores: ["next-env.d.ts"] },
        ],
        camelcase: "off",
        radix: 2,
        "object-shorthand": 2,
        complexity: ["error", { max: 7 }],
        eqeqeq: 2,
        curly: ["error", "multi-line"],
        "no-return-await": 2,
        "no-console": 1,
        "prefer-arrow-callback": 2,
        "func-style": ["error", "expression", { allowArrowFunctions: true }],
        "max-params": ["error", 3],
        "prefer-destructuring": 2,

        "padding-line-between-statements": [
          "error",
          // Start off by requiring padding between every statement
          { blankLine: "always", prev: "*", next: "*" },
          // Let the `import/order` rule manage padding between imports
          { blankLine: "any", prev: ["import"], next: ["import"] },
          // Group single line constants together
          {
            blankLine: "never",
            prev: ["singleline-const", "singleline-let"],
            next: ["singleline-const", "singleline-let"],
          },
          // Require padding after require statements
          { blankLine: "always", prev: ["cjs-import"], next: "*" },
          // Let the `import/order` rule manage padding between require statements
          { blankLine: "any", prev: ["cjs-import"], next: ["cjs-import"] },
          // Group single line expressions together
          { blankLine: "never", prev: ["expression"], next: ["expression"] },
          // Require padding between multiline expressions
          { blankLine: "always", prev: "*", next: ["multiline-expression"] },
          { blankLine: "always", prev: ["multiline-expression"], next: "*" },
          // Group if statements together
          { blankLine: "never", prev: ["if"], next: ["if"] },
          // Require padding between multiline block statements (includes multiline if statements)
          {
            blankLine: "always",
            prev: "*",
            next: ["block", "multiline-block-like"],
          },
          {
            blankLine: "always",
            prev: ["block", "multiline-block-like"],
            next: "*",
          },
        ],
        "@typescript-eslint/padding-line-between-statements": [
          "error",
          // Require padding between interfaces and types
          { blankLine: "always", prev: "*", next: ["interface", "type"] },
        ],

        // TODO: find a rule to enforce the use of `.includes()` over `.indexOf()`

        "react-hooks/exhaustive-deps": 2,
        "react-hooks/rules-of-hooks": 2,
        "react/no-danger": 2,
        "react/prop-types": 0,
        "react/destructuring-assignment": ["error", "always"],

        "no-restricted-syntax": [
          "error",
          {
            // Taken from: https://github.com/jsx-eslint/eslint-plugin-react/issues/2628#issuecomment-984160944
            selector:
              "ImportDeclaration[source.value='react'][specifiers.0.type='ImportDefaultSpecifier']",
            message:
              "Default React import is not allowed, use named imports instead.",
          },
        ],

        "import/no-duplicates": 2,
        "import/first": 2,
        "import/no-cycle": 2,
        "import/no-self-import": 2,
        "import/no-useless-path-segments": 2,
        "import/no-namespace": 2,
        "import/no-default-export": 2,
        "import/order": [
          2,
          {
            groups: [
              ["builtin", "external"],
              "internal",
              ["parent", "index", "sibling"],
            ],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
            pathGroupsExcludedImportTypes: ["builtin"],
            pathGroups: [
              {
                pattern: "*.mock", // Mocks must be imported first
                patternOptions: { matchBase: true },
                group: "builtin",
                position: "before",
              },
              {
                pattern: "react",
                group: "builtin",
                position: "before",
              },
            ],
          },
        ],
      },
    },
    {
      files: ["src/pages/**"],
      rules: {
        "import/no-default-export": 0,
      },
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": 0,
        "unicorn/prefer-module": 0,
      },
    },
    {
      files: ["**/**.md", "**/**.mdx"],
      extends: ["plugin:mdx/recommended"],
      settings: {
        "mdx/code-blocks": true,
      },
      rules: {
        "react/jsx-no-undef": 0,
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
            ignore: [/^README\.md$/],
          },
        ],
      },
    },
    {
      files: ["**/**.md", "**/**.mdx"],
      rules: {
        "@typescript-eslint/no-unused-vars": 0,
        "import/no-default-export": 0,
        "react/display-name": 0,
        "unicorn/filename-case": 0,
      },
    },
  ],
};
