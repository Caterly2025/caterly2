
# Caterly - Catering Management Platform

Caterly is a modern catering transaction platform built with React, Tailwind CSS, Supabase, and Gemini AI. It streamlines the relationship between restaurant owners and customers for events and large orders.

## Features

- **Customer Discovery**: Search for caterers using a map-based interface.
- **Order Management**: Track active orders from placement to completion.
- **Owner Dashboard**: Manage restaurant onboarding, incoming orders, and sales stats.
- **AI Menu Assistant**: Leverage Gemini AI to generate creative catering menus based on event types.
- **Invoicing**: Automated invoice tracking and status management.

## Tech Stack

- **Frontend**: React 19, Tailwind CSS, Lucide Icons
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **AI**: Google Gemini API (@google/genai)
- **Deployment**: Vercel

## Environment Variables

Ensure the following variables are set in your environment:
- `API_KEY`: Google Gemini API Key
- Supabase credentials (configured in `lib/supabase.ts`)
