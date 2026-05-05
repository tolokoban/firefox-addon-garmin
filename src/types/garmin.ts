import { assertType } from "@tolokoban/type-guards"

export interface GarminActivitySummary {
    activityId: number
    activityName: string
    activityType: {
        typeId: number
        typeKey: string
        parentTypeId: number
    }
    /** new Date(beginTimestamp) */
    beginTimestamp: number
    deviceId: number
    distance: number
    duration: number
    elevationGain: number
    elevationLoss: number
    endLatitude: number
    endLongitude: number
    locationName: string
    startLatitude: number
    startLongitude: number
}

export function assertGarminActivitySummary(data: unknown): asserts data is GarminActivitySummary {
    return assertType(data, {
        activityId: "number",
        activityName: "string",
        activityType: {
            typeId: "number",
            typeKey: "string",
            parentTypeId: "number"
        },
        beginTimestamp: "number",
        deviceId: "number",
        distance: "number",
        duration: "number",
        elevationGain: "number",
        elevationLoss: "number",
        endLatitude: "number",
        endLongitude: "number",
        locationName: "string",
        startLatitude: "number",
        startLongitude: "number",
    })
}

export function assertGarminActivitySummaryArray(data: unknown): asserts data is GarminActivitySummary[] {
    return assertType(data, [
        "array", {
            activityId: "number",
            activityName: "string",
            activityType: {
                typeId: "number",
                typeKey: "string",
                parentTypeId: "number"
            },
            beginTimestamp: "number",
            deviceId: "number",
            distance: "number",
            duration: "number",
            elevationGain: "number",
            elevationLoss: "number",
            endLatitude: "number",
            endLongitude: "number",
            locationName: "string",
            startLatitude: "number",
            startLongitude: "number",
        }
    ])
}