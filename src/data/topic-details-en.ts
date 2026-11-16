// Site-specific additions to existing long-form guides. Every photograph below
// is an existing Buddha Park image from this repository's preserved gallery.
export interface Detail {
  tagline: string;
  features: string[];
  visitTips: string[];
  photos: { number: number; alt: string; caption: string }[];
  route: string[];
  viewpoint: string;
  stay: string;
}

export const TOPIC_DETAILS_EN: Record<string, Detail> = {
  'entrance-fee': {
    tagline: 'Ticket planning for the sculpture park beside the Mekong',
    features: ['Pay at the entrance counter rather than relying on older online prices.', 'The reclining Buddha and three-level tower are highlights within the same sculpture grounds.', 'Carry cash in Lao kip and leave some flexibility for transport.'],
    visitTips: ['Check the posted admission board before paying.', 'Ask the counter about camera charges or child rates if relevant.', 'Allow at least an hour in the grounds after buying the ticket.'],
    photos: [{ number: 5, alt: 'The rounded three-realm tower and Buddhist statues at Buddha Park', caption: 'The tower and statues are inside Buddha Park, not a separate attraction.' }, { number: 8, alt: 'Close view of the weathered concrete Buddha sculptures', caption: 'The detail and scale of the concrete figures are central to the visit.' }],
    route: ['Enter through the official ticket area.', 'Walk toward the main sculpture group.', 'See the reclining Buddha and the tower exterior.', 'Return toward the entrance with time for the bus or pick-up.'],
    viewpoint: 'The broad lawn beside the reclining Buddha gives room to frame the sculpture; the tower offers an elevated view only when access is permitted.',
    stay: 'Most visitors can return to accommodation in central Vientiane. An overnight stay near the park is not necessary for a short visit.',
  },
  'how-to-get-there': {
    tagline: 'Independent travel and return-trip planning from Vientiane',
    features: ['Bus 14 is commonly used by budget travellers.', 'Road transport is required between the city centre and the park.', 'The park is near the Mekong and the First Lao–Thai Friendship Bridge, but is a distinct destination.'],
    visitTips: ['Confirm the return service before leaving the city.', 'For a driver, agree both the waiting time and return fare.', 'Pin the actual park entrance rather than the Friendship Bridge.'],
    photos: [{ number: 20, alt: 'Pedestrian path through Buddha Park sculpture garden', caption: 'The park paths are for exploring after you reach the entrance.' }, { number: 1, alt: 'Wide overview of Buddha Park with reclining Buddha and other statues', caption: 'A wide view helps identify the destination at the end of the journey.' }],
    route: ['Depart Talat Sao or your agreed city pick-up location.', 'Follow the appropriate road service or driver route to Xieng Khuan.', 'Check the park entrance sign and purchase admission.', 'Return using the bus service or prearranged pick-up.'],
    viewpoint: 'On arrival, the open sculpture garden offers broad views; the tower viewpoint is an optional extra with steep steps.',
    stay: 'Central Vientiane works as a base for this excursion, with transport choices generally broader than around the park.',
  },
  sculptures: {
    tagline: 'A closer look at Buddhist and Hindu concrete figures',
    features: ['The reclining Buddha anchors the garden’s long sightline.', 'The three-level spherical tower uses a mouth-shaped entrance.', 'Hindu and Buddhist stories appear together across the figures.'],
    visitTips: ['Observe sculptures from the visitor paths.', 'Read figures as twentieth-century interpretations rather than ancient ruins.', 'Look at the changing relationship between scale, surface and setting.'],
    photos: [{ number: 8, alt: 'Large Buddha figures with weathered concrete surfaces', caption: 'Concrete surfaces and hand-modeled forms reward closer observation.' }, { number: 14, alt: 'Hindu-inspired sculpture group outside Buddha Park tower', caption: 'Hindu subjects stand beside Buddhist imagery at Xieng Khuan.' }, { number: 12, alt: 'Mouth-shaped entrance of the three-level tower at Buddha Park', caption: 'The tower entrance is one of the park’s most recognizable structures.' }],
    route: ['Begin with the figures nearest the entrance.', 'Compare seated Buddha imagery and Hindu-inspired groups.', 'Walk toward the reclining Buddha.', 'Examine the tower’s exterior and climb only if safe and open.'],
    viewpoint: 'A low, respectful angle emphasizes sculpture texture; the overview from the tower shows how the figures are distributed across the lawns.',
    stay: 'For an extended cultural day, stay in Vientiane and combine the sculpture park with historic city temples on a separate leg.',
  },
  history: {
    tagline: 'From Bunleua Sulilat’s 1958 vision to a recognized heritage landscape',
    features: ['Bunleua Sulilat initiated the park in 1958.', 'Concrete figures draw on Buddhist and Hindu narratives.', 'The park was announced as a local national heritage site in 2022.'],
    visitTips: ['Compare the contemporary concrete construction with its deliberately aged appearance.', 'Treat devotional figures respectfully.', 'Use the sculpture layout to connect the founder’s ideas with particular forms.'],
    photos: [{ number: 1, alt: 'Overview of Buddha Park and the long reclining Buddha', caption: 'The open-air setting has been part of the park’s character since its twentieth-century creation.' }, { number: 14, alt: 'Buddhist and Hindu sculptural figures at Buddha Park', caption: 'Mixed religious iconography is a distinctive part of the founder’s project.' }],
    route: ['Start with a broad view of the garden.', 'Study the reclining Buddha and nearby figures.', 'Look at Hindu-inspired groups and the tower.', 'Finish by comparing the park’s modern construction with its historic religious references.'],
    viewpoint: 'The lawn and tower exterior give useful contexts for understanding the scale of the sculptures rather than isolating each statue.',
    stay: 'A city-centre hotel is a practical base for combining this modern sculpture landscape with the older temples of Vientiane.',
  },
  'visit-itinerary': {
    tagline: 'A relaxed route through the park’s main sights',
    features: ['Five flexible stops rather than a fixed guided tour.', 'Allow time for the reclining Buddha and tower.', 'Plan the journey back before the park closes.'],
    visitTips: ['Keep a buffer for the return bus or driver.', 'Carry sun protection, water and cash.', 'Skip any narrow stair or slippery area that feels unsafe.'],
    photos: [{ number: 20, alt: 'Walking path among concrete sculptures and garden plantings at Buddha Park', caption: 'Follow established paths between the sculpture groups.' }, { number: 5, alt: 'Three-realm tower and nearby Buddhist figures at Buddha Park', caption: 'The tower is a useful waypoint, with climbing optional.' }],
    route: ['Entrance and posted visitor information.', 'First overview of the open-air sculpture lawn.', 'Reclining Buddha and surrounding figures.', 'Three-realm tower exterior and optional viewpoint.', 'Final detail photos and return to the gate.'],
    viewpoint: 'Use the open lawn for wide images, then a respectful close view of the sculptural detail.',
    stay: 'Return to central Vientiane for the evening; the park itinerary does not require an overnight stay on site.',
  },
  'photography-guide': {
    tagline: 'Light, scale and respectful photo positions in Xieng Khuan',
    features: ['The large reclining Buddha works best with space around the subject.', 'The tower is a dramatic exterior composition.', 'The mixed figures reward details of material and carving.'],
    visitTips: ['Keep to paths and never stand on sculptures.', 'Avoid interrupting prayer or blocking passages.', 'Check current camera and drone rules at the entrance.'],
    photos: [{ number: 1, alt: 'Wide photograph of Buddha Park from an elevated viewpoint', caption: 'A wide composition includes the reclining Buddha and sculpture groups.' }, { number: 12, alt: 'Mouth-shaped entrance to the sculptural tower', caption: 'The face-shaped opening makes a strong architectural detail.' }, { number: 8, alt: 'Large concrete Buddha statues beneath a blue sky', caption: 'Side lighting can help reveal the texture of the figures.' }],
    route: ['Begin with the widest view available from a permitted position.', 'Photograph the reclining Buddha with contextual surroundings.', 'Move toward the tower for the mouth entrance and exterior.', 'Finish with respectful detail images of individual figures.'],
    viewpoint: 'The tower rooftop may offer the most encompassing viewpoint, but its stair is narrow and access should never be assumed.',
    stay: 'Central Vientiane is suitable for photographers who wish to return on another day in different light.',
  },
  'vientiane-day-trip': {
    tagline: 'Combine Buddha Park with distinct cultural sights in the capital',
    features: ['Buddha Park is outside the central city.', 'Pha That Luang and Patuxai offer different urban landmarks.', 'Wat Si Saket and Ho Phra Keo form a possible paired stop in the centre.'],
    visitTips: ['Select only a few stops rather than rushing all five.', 'Check each site’s hours and admission separately.', 'Use the individual map links for each landmark.'],
    photos: [{ number: 1, alt: 'Actual Buddha Park sculpture garden with reclining Buddha', caption: 'Buddha Park is the first destination in this route. Other landmarks have separate map links below.' }, { number: 20, alt: 'Path through Buddha Park beside the Mekong', caption: 'Allow time to explore the park before travelling to central Vientiane.' }],
    route: ['Travel to Buddha Park and walk its sculpture lawns.', 'Return to central Vientiane.', 'Choose Pha That Luang or Patuxai depending on available time.', 'If still open, visit Wat Si Saket and/or Ho Phra Keo.', 'Finish with food or a relaxed city walk.'],
    viewpoint: 'At Buddha Park use the open lawns; at other locations follow their own posted photography and access rules.',
    stay: 'Choose central Vientiane accommodation for easier access to both the park excursion and the city landmarks.',
  },
};
