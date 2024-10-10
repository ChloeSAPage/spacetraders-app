import { ApiResponse } from "./response.interface";

// Default object that matches the ApiResponse interface
const defaultApiResponse: ApiResponse = {
    data: {
        token: "", // Default value for token
        agent: {
            accountId: "", // Default value for accountId
            symbol: "", // Default value for symbol
            headquarters: "", // Default value for headquarters
            credits: 0, // Default value for credits
            startingFaction: "", // Default value for startingFaction
            shipCount: 0, // Default value for shipCount
        },
        contract: {
            id: "", // Default value for contract id
            factionSymbol: "", // Default value for factionSymbol
            type: "", // Default value for contract type
            terms: {
                deadline: "", // Default value for deadline
                payment: {
                    onAccepted: 0, // Default value for onAccepted
                    onFulfilled: 0, // Default value for onFulfilled
                },
                deliver: [], // Default value for deliver, an empty array
            },
            accepted: false, // Default value for accepted
            fulfilled: false, // Default value for fulfilled
            expiration: "", // Default value for expiration
            deadlineToAccept: "", // Default value for deadlineToAccept
        },
        faction: {
            symbol: "", // Default value for faction symbol
            name: "", // Default value for faction name
            description: "", // Default value for faction description
            headquarters: "", // Default value for faction headquarters
            traits: [], // Default value for traits, an empty array
            isRecruiting: false, // Default value for isRecruiting
        },
        ship: {
            symbol: "", // Default value for ship symbol
            nav: {
                systemSymbol: "", // Default value for systemSymbol
                waypointSymbol: "", // Default value for waypointSymbol
                route: {
                    origin: {
                        symbol: "", // Default value for origin symbol
                        type: "", // Default value for origin type
                        systemSymbol: "", // Default value for origin systemSymbol
                        x: 0, // Default value for x
                        y: 0, // Default value for y
                    },
                    destination: {
                        symbol: "", // Default value for destination symbol
                        type: "", // Default value for destination type
                        systemSymbol: "", // Default value for destination systemSymbol
                        x: 0, // Default value for destination x
                        y: 0, // Default value for destination y
                    },
                    arrival: "", // Default value for arrival time
                    departureTime: "", // Default value for departure time
                },
                status: "", // Default value for status
                flightMode: "", // Default value for flight mode
            },
            crew: {
                current: 0, // Default value for current crew
                capacity: 0, // Default value for capacity
                required: 0, // Default value for required crew
                rotation: "", // Default value for rotation
                morale: 0, // Default value for morale
                wages: 0, // Default value for wages
            },
            fuel: {
                current: 0, // Default value for current fuel
                capacity: 0, // Default value for fuel capacity
                consumed: {
                    amount: 0, // Default value for consumed fuel amount
                    timestamp: "", // Default value for consumed fuel timestamp
                },
            },
            cooldown: {
                shipSymbol: "", // Default value for shipSymbol
                totalSeconds: 0, // Default value for total seconds
                remainingSeconds: 0, // Default value for remaining seconds
            },
            frame: {
                symbol: "", // Default value for frame symbol
                name: "", // Default value for frame name
                description: "", // Default value for frame description
                moduleSlots: 0, // Default value for module slots
                mountingPoints: 0, // Default value for mounting points
                fuelCapacity: 0, // Default value for fuel capacity
                condition: 0, // Default value for condition
                integrity: 0, // Default value for integrity
                requirements: {
                    power: 0, // Default value for power requirement
                    crew: 0, // Default value for crew requirement
                },
            },
            reactor: {
                symbol: "", // Default value for reactor symbol
                name: "", // Default value for reactor name
                description: "", // Default value for reactor description
                condition: 0, // Default value for condition
                integrity: 0, // Default value for integrity
                powerOutput: 0, // Default value for power output
                requirements: {
                    power: 0, // Default value for power requirement
                    crew: 0, // Default value for crew requirement
                },
            },
            engine: {
                symbol: "", // Default value for engine symbol
                name: "", // Default value for engine name
                description: "", // Default value for engine description
                condition: 0, // Default value for condition
                integrity: 0, // Default value for integrity
                speed: 0, // Default value for speed
                requirements: {
                    power: 0, // Default value for power requirement
                    crew: 0, // Default value for crew requirement
                },
            },
            modules: [], // Default value for modules, an empty array
            mounts: [], // Default value for mounts, an empty array
            registration: {
                name: "", // Default value for registration name
                factionSymbol: "", // Default value for registration factionSymbol
                role: "", // Default value for registration role
            },
            cargo: {
                capacity: 0, // Default value for cargo capacity
                units: 0, // Default value for cargo units
                inventory: [], // Default value for inventory, an empty array
            },
        },
    },
};

export default defaultApiResponse;