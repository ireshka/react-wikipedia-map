module.exports = {
  '*.{js,jsx}': ['prettier --config .prettierrc --write', 'eslint --fix', 'git add'],
  '*.{html}': ['prettier --config .prettierrc --write', 'git add'],
};