# Twisted Scissors Barbershop - Product Requirement Document

## Project Overview

**Business Name:** Twisted Scissors
**Type:** Barbershop / Men's Grooming
**Location:** Hanover, New Hampshire
**Booking URL:** https://bookoapp.com/book/twisted-scissors
**Target Audience:** Men seeking premium grooming services in Upper Valley area

---

## 1. Brand Identity

### Business Description
Twisted Scissors is a premium barbershop in Hanover, NH offering expert haircuts, beard grooming, and traditional barbering services. Known for skilled barbers, welcoming atmosphere, and attention to detail.

### Brand Personality
- **Confident but approachable**
- **Traditional craftsmanship meets modern style**
- **Community-focused local business**
- **Quality over quantity**

### Tagline Options
- "Where precision meets personality"
- "Your look, perfected"
- "Hanover's finest cuts"

---

## 2. Visual Design System

### Color Palette
```
Primary:         #1A1A2E (Deep Navy - sophistication)
Secondary:       #C9A227 (Gold/Amber - premium quality)
Accent:          #E94560 (Crimson - energy, confidence)
Background:      #F5F5F0 (Warm White - clean, welcoming)
Surface:         #FFFFFF (Pure White)
Text Primary:    #1A1A2E (Deep Navy)
Text Secondary:  #4A4A4A (Charcoal)
Text Muted:      #8A8A8A (Gray)
```

### Typography
```
Headings:        Oswald (bold, masculine, strong presence)
Body:            Inter (clean, highly readable)
Accent/Quotes:   Playfair Display (elegant contrast for testimonials)
```

### Visual Style
- **Masculine elegance**: Bold lines, strong contrasts
- **Premium feel**: Gold accents, generous whitespace
- **Authentic photography**: Real barbers, real clients, real shop
- **Texture**: Subtle grain, paper textures for warmth

---

## 3. Website Structure

### Required Pages

#### 1. Home
- Hero with shop atmosphere photo
- Featured services preview
- Barber profiles
- Reviews/testimonials
- CTA to book

#### 2. Services
- Complete service menu with pricing
- Service descriptions
- Duration estimates
- Add-on options

#### 3. Book Now
- Direct integration with BookO appointment system
- Service selection
- Barber selection
- Time slot picker

#### 4. About
- Shop story and history
- Barber profiles with photos and bios
- Shop atmosphere/photos
- Values and mission

#### 5. Reviews
- Customer testimonials
- Before/after photos (with permission)
- Google/Yelp review integration

#### 6. Contact
- Location and hours
- Phone number (click-to-call)
- Map integration
- Contact form

---

## 4. Key Features

### Required
1. **Online Booking Integration**
   - Direct link to BookO: https://bookoapp.com/book/twisted-scissors
   - Embedded booking widget if possible
   - Clear "Book Now" CTAs throughout site

2. **Service Menu**
   - Haircuts (Classic, Fade, Buzz, etc.)
   - Beard services (Trim, Shape, Hot Towel Shave)
   - Add-ons (Shampoo, Style, etc.)
   - Pricing clearly displayed

3. **Barber Profiles**
   - Photos of each barber
   - Names and specialties
   - Experience/background
   - Book with specific barber option

4. **Reviews/Testimonials**
   - Real customer reviews from provided files
   - Star ratings
   - Photo testimonials if available

5. **Click-to-Call**
   - Prominent phone number
   - One-tap calling on mobile

6. **Hours Display**
   - Current open/closed status
   - Special holiday hours
   - Walk-in availability

### Optional
- Online gift card sales
- Loyalty program integration
- Product retail section
- Blog for grooming tips

---

## 5. Dynamic Fields (Content to Populate)

### Business Information
- Business Name: Twisted Scissors
- Address: [To be confirmed - Hanover, NH]
- Phone: [To be confirmed]
- Email: [To be confirmed]

### Hours
- Monday: [Hours]
- Tuesday: [Hours]
- Wednesday: [Hours]
- Thursday: [Hours]
- Friday: [Hours]
- Saturday: [Hours]
- Sunday: Closed (typical for barbershops)

### Services (with pricing)
1. **Classic Haircut** - $[price] - [duration]
2. **Fade/ Taper** - $[price] - [duration]
3. **Beard Trim** - $[price] - [duration]
4. **Hot Towel Shave** - $[price] - [duration]
5. **Haircut + Beard** - $[price] - [duration]
6. **Buzz Cut** - $[price] - [duration]
7. **Kids Cut** - $[price] - [duration]

### Barbers
- [Barber 1 Name] - [Specialty] - [Photo]
- [Barber 2 Name] - [Specialty] - [Photo]
- [Barber 3 Name] - [Specialty] - [Photo]

### Reviews (from Google Drive)
- Review 1: [Customer name] - [Rating] - [Text]
- Review 2: [Customer name] - [Rating] - [Text]
- Review 3: [Customer name] - [Rating] - [Text]
- [Additional reviews from provided files]

### Photos (from Google Drive)
- Shop exterior
- Shop interior/barber chairs
- Barber action shots
- Finished cuts (with client permission)
- Team photo

---

## 6. Layout Specifications

### Homepage Structure
1. **Hero Section**
   - Full-width shop atmosphere image
   - "Twisted Scissors" logo/lockup
   - Tagline
   - "Book Appointment" CTA button

2. **Services Preview**
   - 3-4 featured services
   - "View All Services" link

3. **Barber Profiles**
   - Grid of barber cards
   - Photos and names
   - "Meet the Team" link

4. **Reviews Section**
   - 3 featured testimonials
   - Star ratings
   - "Read More Reviews" link

5. **Book CTA Section**
   - "Ready for a fresh cut?"
   - BookO integration or prominent link
   - Hours and contact info

### Navigation
- Sticky header
- Logo left
- Nav items: Services, Book, About, Reviews, Contact
- "Book Now" button (prominent)

---

## 7. Technical Requirements

### Platform
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)

### Integrations
- BookO appointment booking: https://bookoapp.com/book/twisted-scissors
- Google Maps (location)
- Google Reviews (if available)

### Performance
- Lighthouse score 90+
- Mobile-first responsive
- Fast load times (< 3s)
- SEO optimized

---

## 8. Content Assets Needed

### From Client
1. [ ] Business hours
2. [ ] Phone number
3. [ ] Email address
4. [ ] Exact address
5. [ ] Service menu with prices
6. [ ] Barber names and bios
7. [ ] Barber photos
8. [ ] Shop photos (interior/exterior)

### From Google Drive
1. [x] Reviews (provided)
2. [x] Photos (provided)
3. [ ] Additional assets as needed

---

## 9. Success Metrics

- Online booking conversions
- Phone call clicks
- Page engagement time
- Mobile traffic
- Local SEO ranking

---

## 10. Timeline

- Day 1: Setup project, create structure
- Day 2: Build pages, integrate booking
- Day 3: Add content, photos, reviews
- Day 4: Polish, animations, testing
- Day 5: Deploy and launch

---

**Document Version:** 1.0
**Created:** March 15, 2026
**Status:** Ready for development
