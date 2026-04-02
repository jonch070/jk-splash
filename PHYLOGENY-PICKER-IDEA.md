# Phylogenetic Work Picker - Important Idea

## Concept
Interactive hierarchical visualization that acts as a **filter/selector** for work thumbnails.

## Layout
- **Top half**: Interactive phylogenetic tree / hierarchical edge bundling
- **Bottom half**: Grid of work thumbnails (images/videos)
- Clicking nodes filters the thumbnails below

## Behavior
- **Root node**: "work" 
- **Category nodes**: [film], [score], [album], [field], etc.
- **Project nodes**: everywhen, north, mountains, etc.
- **Individual items**: can belong to multiple groups (polymorphic)

## Visual Style Reference
- https://www.biostars.org/p/9582433/ (rectangular phylogenetic tree)
- https://www.data-to-viz.com/graph/edge_bundling.html (D3 hierarchical edge bundling)
- Horizontal tree with connecting lines → curves like cables

## Resume Data (seed)
```
work/
├── [film]
│   ├── everywhen (phi centre, imax)
│   ├── north (project)
│   └── installation (i-thou, everywhen)
├── [score]
│   ├── hunt for oldest dna (national geographic, emmy)
│   └── film scores
├── [album]
│   ├── mountains (self-released)
│   └── december (self-released)
├── [field]
│   └── recordings (travel, landscape)
└── [quiet]
    ├── quiet parks international
    └── protecting the quiet (the narwhal)
```

## Data Structure
```javascript
workItems = [
  {
    id: 'everywhen',
    title: 'everywhen',
    categories: ['film', 'install'],
    thumbnail: 'everywhen.jpg',
    year: 2024,
    description: 'installation — phi centre, imax'
  },
  {
    id: 'hunt-for-oldest-dna',
    title: 'hunt for the oldest dna',
    categories: ['score', 'film'],
    thumbnail: 'dna.jpg',
    year: 2023,
    description: 'score — national geographic, emmy'
  },
  {
    id: 'mountains',
    title: 'mountains',
    categories: ['album'],
    thumbnail: 'mountains.jpg',
    year: 2022,
    description: 'self-released'
  },
  // ... etc
]

taxonomy = {
  root: 'work',
  children: [
    { id: 'film', label: '[film]', children: ['everywhen', 'north', 'installation'] },
    { id: 'score', label: '[score]', children: ['hunt-for-oldest-dna'] },
    { id: 'album', label: '[album]', children: ['mountains', 'december'] },
    { id: 'field', label: '[field]', children: ['recordings'] },
    { id: 'quiet', label: '[quiet]', children: ['quiet-parks', 'narwhal'] }
  ]
}
```

## Implementation
- D3.js for hierarchical edge bundling, OR
- Simple CSS/HTML tree (easier to maintain)
- Filter thumbnails based on selected node
- Show all by default, filter on click

## Future
- Could add edge bundling for relationships between items
- Could animate thumbnails in/out on filter
- Could add "AND" / "OR" filtering (e.g., film AND 2024)
