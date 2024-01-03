# filebay-timezone

A Node.js package to easily fetch the current time in a specified timezone or UTC if no timezone is provided. Perfect for applications that require handling different time zones.

## Installation

npm install filebay-timezone

## Usage

const filebayTimezone = require('filebay-timezone');

// Get the current time in a specific timezone
// Example: filebayTimezone('America/New_York')
// If no timezone is provided, it returns the current UTC time.
// Example: filebayTimezone()

const currentTime = filebayTimezone('America/New_York');
console.log("Current time in New York:", currentTime);

const utcTime = filebayTimezone();
console.log("Current UTC time:", utcTime);

## Features

-Simple and Easy to Use: Just provide the timezone and get the current time.
-Flexibility: Works with any valid timezone string.
-Fallback to UTC: If no timezone is provided, UTC time is returned by default.