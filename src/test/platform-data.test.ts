import { describe, expect, it } from "vitest";
import { isUpcomingEventDate } from "@/features/platform/data";

describe("confirmed outreach date visibility", () => {
  const now = Date.parse("2026-11-25T12:54:00Z");

  it("does not show the 19 October 2026 Kenyenya date as upcoming", () => {
    expect(isUpcomingEventDate("2026-10-19T08:00:00Z", now)).toBe(false);
  });

  it("does not show the 25 October 2026 Marani date as upcoming", () => {
    expect(isUpcomingEventDate("2026-10-25T08:00:00Z", now)).toBe(false);
  });

  it("shows only dates that are still in the future", () => {
    expect(isUpcomingEventDate("2026-11-26T08:00:00Z", now)).toBe(true);
  });

  it("does not treat missing or invalid dates as confirmed upcoming events", () => {
    expect(isUpcomingEventDate(null, now)).toBe(false);
    expect(isUpcomingEventDate("not-a-date", now)).toBe(false);
  });
});