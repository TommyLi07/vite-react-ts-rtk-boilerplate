module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json',],
  overrides: [
    {
        files: ['*.html', '**/*.html'],
        extends: ['stylelint-config-recommended'],
    },
  ],
};
