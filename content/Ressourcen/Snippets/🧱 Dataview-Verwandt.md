```dataview
list where contains(file.outlinks, this.file.link) and !contains(file.inlinks, this.file.link)
```