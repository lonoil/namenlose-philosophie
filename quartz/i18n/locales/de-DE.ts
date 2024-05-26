import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Unbenannt",
    description: "Keine Beschreibung angegeben",
  },
  components: {
    callout: {
      note: "Hinweis",
      abstract: "Zusammenfassung",
      info: "Info",
      todo: "Zu erledigen",
      tip: "Tipp",
      success: "Erfolg",
      question: "Frage",
      warning: "Warnung",
      failure: "Misserfolg",
      danger: "Gefahr",
      bug: "Fehler",
      example: "Beispiel",
      quote: "Zitat",
    },
    backlinks: {
      title: "Backlinks",
      noBacklinksFound: "Keine Backlinks gefunden.",
    },
    themeToggle: {
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
    },
    explorer: {
      title: "Glossar",
    },
    footer: {
      createdWith: "Erstellt mit",
    },
    graph: {
      title: "Graph",
    },
    recentNotes: {
      title: "Zuletzt bearbeitete Seiten",
      seeRemainingMore: ({ remaining }) => `${remaining} weitere ansehen →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transklusion von ${targetSlug}`,
      linkToOriginal: "Link zum Original",
    },
    search: {
      title: "Suche",
      searchBarPlaceholder: "Suche nach etwas",
    },
    tableOfContents: {
      title: "Inhaltsverzeichnis",
    },
    contentMeta: {
      readingTime: ({ minutes }) =>
        minutes == 1 ? `1 Minute Lesezeit` : `${minutes} Minuten Lesezeit`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Zuletzt bearbeitete Seiten",
      lastFewNotes: ({ count }) => `Letzte ${count} Seiten`,
    },
    error: {
      title: "Nicht gefunden",
      notFound:
        "Dieser Artikel befindet sich noch in der Entwurfs-Phase und wurde noch nicht veröffentlicht.",
      home: "Zurück zur Homepage",
    },
    folderContent: {
      folder: "Ordner",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 Datei in diesem Ordner." : `${count} Dateien in diesem Ordner.`,
    },
    tagContent: {
      tag: "Tag",
      tagIndex: "Tag-Übersicht",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 Datei mit diesem Tag." : `${count} Dateien mit diesem Tag.`,
      showingFirst: ({ count }) => `Die ersten ${count} Tags werden angezeigt.`,
      totalTags: ({ count }) => `${count} Tags insgesamt.`,
    },
  },
} as const satisfies Translation
