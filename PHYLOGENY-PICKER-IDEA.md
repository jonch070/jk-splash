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

## Alternative Visualizations (all using same data)
From https://www.data-to-viz.com/ - all work with same resume data:

- **Dendrogram** - tree structure, upside down
- **Circular dendrogram** - tree in circle  
- **Hierarchical edge bundling** - curves following hierarchy (recommended)
- **Treemap** - nested rectangles
- **Sunburst** - circular treemap
- **Circle packing** - circles inside circles

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
  { id: 'everywhen', title: 'everywhen', categories: ['film', 'install'], thumbnail: 'everywhen.jpg', year: 2024 },
  { id: 'hunt-for-oldest-dna', title: 'hunt for the oldest dna', categories: ['score', 'film'], thumbnail: 'dna.jpg', year: 2023 },
  { id: 'mountains', title: 'mountains', categories: ['album'], thumbnail: 'mountains.jpg', year: 2022 },
  // ... etc
]
```

## Implementation
- D3.js for complex visualizations
- Simple CSS/HTML tree for easier maintenance
- Filter thumbnails based on selected node
- Show all by default, filter on click

## Responsive Layout
- **Desktop**: Graph on right, thumbnail grid on left (side by side)
- **Mobile**: Graph on top OR bottom, thumbnails below/above (stacked)
