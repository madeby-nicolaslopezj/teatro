orion.dictionary.addDefinition('backgroundImage', 'home',
  orion.attribute('image')
);

orion.dictionary.addDefinition('description', 'home', {
  type: String,
  autoform: {
    type: 'textarea',
    rows: 6
  }
})
