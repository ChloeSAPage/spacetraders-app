// Token information
export interface TokenInfo {
    token: string;
}

// Agent information
export interface Agent {
    accountId: string;
    symbol: string;
    headquarters: string;
    credits: number;
    startingFaction: string;
    shipCount: number;
}

// Contract terms
export interface Payment {
    onAccepted: number;
    onFulfilled: number;
}

export interface Delivery {
    tradeSymbol: string;
    destinationSymbol: string;
    unitsRequired: number;
    unitsFulfilled: number;
}

export interface ContractTerms {
    deadline: string;
    payment: Payment;
    deliver: Delivery[];
}

// Contract information
export interface Contract {
    id: string;
    factionSymbol: string;
    type: string;
    terms: ContractTerms;
    accepted: boolean;
    fulfilled: boolean;
    expiration: string;
    deadlineToAccept: string;
}

// Faction traits
export interface FactionTrait {
    symbol: string;
    name: string;
    description: string;
}

// Faction information
export interface Faction {
    symbol: string;
    name: string;
    description: string;
    headquarters: string;
    traits: FactionTrait[];
    isRecruiting: boolean;
}

// Ship navigation and route
export interface RouteWaypoint {
    symbol: string;
    type: string;
    systemSymbol: string;
    x: number;
    y: number;
}

export interface Route {
    origin: RouteWaypoint;
    destination: RouteWaypoint;
    arrival: string;
    departureTime: string;
}

export interface ShipNav {
    systemSymbol: string;
    waypointSymbol: string;
    route: Route;
    status: string;
    flightMode: string;
}

// Ship crew information
export interface ShipCrew {
    current: number;
    capacity: number;
    required: number;
    rotation: string;
    morale: number;
    wages: number;
}

// Ship fuel information
export interface FuelConsumed {
    amount: number;
    timestamp: string;
}

export interface ShipFuel {
    current: number;
    capacity: number;
    consumed: FuelConsumed;
}

// Ship cooldown
export interface ShipCooldown {
    shipSymbol: string;
    totalSeconds: number;
    remainingSeconds: number;
}

// Ship frame, reactor, and engine requirements
export interface ShipRequirements {
    power: number;
    crew: number;
}

// Ship frame
export interface ShipFrame {
    symbol: string;
    name: string;
    description: string;
    moduleSlots: number;
    mountingPoints: number;
    fuelCapacity: number;
    condition: number;
    integrity: number;
    requirements: ShipRequirements;
}

// Ship reactor
export interface ShipReactor {
    symbol: string;
    name: string;
    description: string;
    condition: number;
    integrity: number;
    powerOutput: number;
    requirements: ShipRequirements;
}

// Ship engine
export interface ShipEngine {
    symbol: string;
    name: string;
    description: string;
    condition: number;
    integrity: number;
    speed: number;
    requirements: ShipRequirements;
}

// Ship modules
export interface ShipModule {
    symbol: string;
    name: string;
    description: string;
    capacity?: number;
    requirements: ShipRequirements;
}

// Ship mounts
export interface ShipMount {
    symbol: string;
    name: string;
    description: string;
    strength: number;
    deposits?: string[];
    requirements: ShipRequirements;
}

// Ship registration
export interface ShipRegistration {
    name: string;
    factionSymbol: string;
    role: string;
}

// Ship cargo
export interface ShipCargo {
    capacity: number;
    units: number;
    inventory: any[];
}

// Complete ship information
export interface Ship {
    symbol: string;
    nav: ShipNav;
    crew: ShipCrew;
    fuel: ShipFuel;
    cooldown: ShipCooldown;
    frame: ShipFrame;
    reactor: ShipReactor;
    engine: ShipEngine;
    modules: ShipModule[];
    mounts: ShipMount[];
    registration: ShipRegistration;
    cargo: ShipCargo;
}

// Full API response
export interface ApiResponse {
    data: {
        token: string;
        agent: Agent;
        contract: Contract;
        faction: Faction;
        ship: Ship;
    };
}
