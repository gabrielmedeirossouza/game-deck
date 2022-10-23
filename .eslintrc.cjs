module.exports = {
  "env": {
    "browser": true,
    "es2022": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "import",
    "sort-class-members"
  ],
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "space-before-function-paren": ["error", "never"],
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
    "react/no-unknown-property": "off",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "newline-before-return": "error",
    "indent": [2, 2, { "SwitchCase": 1 }],
    "padded-blocks": ["error", "never"],
    "brace-style": ["error", "1tbs"],
    "no-irregular-whitespace": "error",
    "no-trailing-spaces": "error",
    "eol-last": "error",
    "unicorn/no-array-for-each": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "object-curly-spacing": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "comma-spacing": "error",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/no-array-reduce": "off",
    // "unicorn/filename-case": [
    //   "error",
    //   {
    //     "case": "kebabCase"
    //   }
    // ],
    // "@typescript-eslint/explicit-member-accessibility": [
    //   "error",
    //   {
    //     "accessibility": "explicit",
    //     "overrides": {
    //       "constructors": "off"
    //     }
    //   }
    // ],
    // "sort-class-members/sort-class-members": [
    //   2,
    //   {
    //     "order": [
    //       "[static-properties]",
    //       "[properties]",
    //       "[conventional-private-properties]",
    //       "constructor",
    //       "[static-methods]",
    //       "[methods]",
    //       "[conventional-private-methods]"
    //     ],
    //     "accessorPairPositioning": "getThenSet"
    //   }
    // ],
    // "@typescript-eslint/naming-convention": [
    //   "error",
    //   {
    //     "selector": "classMethod",
    //     "format": ["PascalCase"],
    //     "leadingUnderscore": "allow",
    //     "trailingUnderscore": "allow"
    //   },
    //   {
    //     "selector": ["classMethod"],
    //     "format": ["PascalCase"],
    //     "modifiers": ["private"],
    //     "prefix": ["_"]
    //   },
    //   {
    //     	"selector": ["classProperty"],
    //     "format": ["camelCase"],
    //     "modifiers": ["private"],
    //     "prefix": ["_"]
    //   },
    //   {
    //     "selector": ["classProperty"],
    //     "format": ["camelCase"],
    //     "modifiers": ["protected"],
    //     "prefix": ["_"]
    //   }
    // ],
    "@typescript-eslint/no-empty-function": "off",
    "react/display-name": "off",
    "unicorn/no-null": "off",
  }
};
