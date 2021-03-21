const styles = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#000000',
      },
      {
        lightness: 13,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#144b53',
      },
      {
        lightness: 14,
      },
      {
        weight: 1.4,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#08304b',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#171717',
      },
    ],
  },
  {
    featureType: 'poi',
    // for turn off poi icons
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.medical',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.sports_complex',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#858585',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        lightness: 25,
      },
      {
        color: '#6c6c6c',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#171717',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#ff0000',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'labels.icon',
    stylers: [
      {
        color: '#d3d357',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2a2a2a',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#45d5e9',
      },
      {
        lightness: 16,
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#00b2cd',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'all',
    stylers: [
      {
        color: '#146474',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#021019',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#002c3c',
      },
    ],
  },
];

export default { styles };
