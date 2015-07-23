News = new orion.collection('news', {
  singularName: 'noticia',
  pluralName: 'noticias',
  title: 'Noticias',
  link: {
    title: 'Noticias'
  },
  tabular: {
    columns: [
      { data: 'title', title: 'Título' },
      { data: 'publisher', title: 'Fuente' },
      { data: 'url', title: 'URL' }
    ]
  }
});

News.attachSchema(new SimpleSchema({
  publisher: {
    type: String,
    label: 'Fuente'
  },
  title: {
    type: String,
    label: 'Título'
  },
  description: {
    type: String,
    label: 'Descripción',
    autoform: {
      type: 'textarea',
      rows: 6
    }
  },
  url: {
    type: String,
    regEx: SimpleSchema.RegEx.Url
  },
  createdAt: orion.attribute('createdAt')
}))
