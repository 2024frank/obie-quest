# ObieQuest - Oberlin College Student Guide

ObieQuest is a comprehensive web application designed to help Oberlin College students discover campus resources and track their college journey. The app provides information about academic resources, dining options, events, and includes a personalized checklist for students to track their experiences throughout their four years at Oberlin.

## Features

- **Academic Resources**: Find libraries, study spaces, tutoring services, and other academic support resources on campus.
- **Dining Options**: Explore campus dining halls, cafes, and restaurants in downtown Oberlin.
- **Campus Events**: Stay updated on lectures, performances, club activities, and other events.
- **Personalized Checklist**: Track your Oberlin College experience with a customizable checklist organized by year and category.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **State Management**: Zustand with persistence
- **Icons**: React Icons

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Application Structure

- `src/app/page.tsx` - Home page
- `src/app/academic/page.tsx` - Academic resources page
- `src/app/dining/page.tsx` - Dining options page
- `src/app/events/page.tsx` - Campus events page
- `src/app/checklist/page.tsx` - Personalized checklist page
- `src/components/` - Reusable UI components
- `src/stores/` - Zustand state management

## Checklist Features

The checklist functionality allows students to:

- View a pre-populated list of suggested Oberlin experiences
- Add custom items to their checklist
- Filter items by category, year level, and completion status
- Mark items as complete or incomplete
- Track overall progress

The checklist is organized into the following categories:
- Academic
- Social
- Career
- Campus
- Downtown

And is divided by year level:
- Freshman
- Sophomore
- Junior
- Senior

## Data Source

The application uses information from [Oberlin College's official website](https://www.oberlin.edu/) to provide accurate details about campus resources and facilities.

## Future Enhancements

- User authentication for personalized experiences
- Integration with Oberlin's academic calendar and event API
- Interactive campus map
- Social sharing of completed checklist items
- Mobile app version

## License

This is a student project created for educational purposes.
