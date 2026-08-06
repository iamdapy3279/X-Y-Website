# X\&Y WEBSITE PLAN 

# HOME PAGE

## DESIGN SYSTEM

**Assets Structure**
```
assets/
  images/
  videos/
  logos/
copy/
  homepage.txt
  about.txt
branding/
```

**Typography**
- Font: **Inter** (Google Fonts) – default for all text.
- Headings:
  - `h1`: 48px (desktop), 36px (tablet), 28px (mobile)
  - `h2`: 36px / 28px / 22px
  - `h3`: 28px / 22px / 18px
- Body text: 18px (desktop), 16px (tablet), 14px (mobile)
- Buttons: 16px, uppercase, letter‑spacing 0.5px

**Color Palette**
- Primary: `#2C3E50` (dark navy)
- Accent: `#E67E22` (vibrant orange)
- Background: `#F5F5F5` (light) / `#111111` (dark mode)
- Text: `#333333` (light), `#EEEEEE` (dark)

**Breakpoints**
- Mobile: ≤ 600 px
- Tablet: 601 px – 1024 px
- Desktop: ≥ 1025 px

**Responsive Utilities**
- `.container { max-width: 1200px; margin: 0 auto; padding: 1rem; }`
- Flex grid: `.row { display: flex; flex‑wrap: wrap; } .col-{1‑12}` for column widths.
- Images & videos: `width: 100%; height: auto; object-fit: cover;`
- Buttons: `.btn-primary { background: var(--color-primary); color: #fff; padding: 0.75rem 1.5rem; border-radius: 4px; }`

--- 

## SECTION 1 : WELCOME SCREEN   Navigation Bar : (L‑R) logo, menu, about us, location, contact us Transparent navigation bar, to appear full time

> **Responsive Behavior**
- Navigation bar uses a flex container `.nav-bar` with items spaced evenly.
- On mobile (<600px) the menu collapses into a hamburger icon (`.hamburger`) that toggles a slide‑in drawer.
- Tablet (601‑1024px) shows inline links with reduced padding.

> **Hero Video**
- Full‑screen `<video>` element with `autoplay muted loop playsinline`.
- `poster` attribute set to a cover image displayed while the video loads; CSS transition fades the poster out (`opacity` 1 → 0) once `loadeddata` fires.
- Container `.hero-section` has `height: 100vh` (full viewport height) and `position: relative`.
- Video scales with `object-fit: cover; width: 100%; height: 100%;`.
- Mobile: video height limited to 60vh to keep above‑fold content visible.

> **Text Overlay**
- Heading `<h1 class="hero-title">` uses `font-size: 48px` (desktop), `36px` (tablet), `28px` (mobile), centered.
- Subtext `<p class="hero-sub">` uses body size.
- Text container `.hero-content` is positioned `absolute` center with `text-align: center` and responsive paddings.

> **Bottom Buttons**
- Primary button `.btn-primary` (“View Menu”) and secondary `.btn-secondary` (“Find Us”).
- Buttons stack vertically on mobile, inline on tablet/desktop.
 

> **Visual Overview**: Hero banner showing a full‑screen corridor view with a yellow rounded **MENU** button; navigation bar hidden.
Full screen landscape video (shots of the kitchen, process, food \- basically a collage)   
- Video behavior: Plays on a continuous loop.
- Loading state: A cover image will be displayed initially and will smoothly fade out once the video finishes loading.
- Responsive design: The section size will be set to fit to screen (full viewport height) seamlessly on both mobile and desktop.

Text :   
Headline : Where every table is yours   
Subtext : A bakehouse & bistro in the heart of Kolkata \- made for mornings, lingering lunches, and slow evenings. 

Bottom : View Menu and Find Us buttons   


## SECTION 2 : OUTLETS AT A GLANCE

> **Responsive Card Layout**
- Use a flex grid `.outlet-cards`.
- Desktop: three columns (`.col-4`).
- Tablet: two columns (`.col-6`).
- Mobile: single column (`.col-12`).
- Each card `.outlet-card` has padding, subtle shadow, and hover elevation.
- Typography: Card title `h3` 24px/20px/18px, details `p` 16px/14px/12px.
- Include icons for phone and clock.


> **Visual Overview**: Location cards presenting the three outlets (Allipore, Salt Lake, Elgin Road) with name, phone, hours, and address. 

ALLIPORE
Phone: +91 92309 85229
Hours: 11 AM – 11 PM
Address:
Ground Floor, 6, Burdwan Rd,
Alipore, Kolkata, West Bengal
700027

SALT LAKE
Phone: +91 82409 68898
Hours: 12 PM – 11:30 PM
Address:
CG-220, Ground Floor, Sector 2,
Salt Lake City, Kolkata – 700091

ELGIN ROAD
Phone: +91 82403 94550
Hours: 8 AM – 10 PM
Address:
10E, Hungerford St, Elgin,
Kolkata, West Bengal 700017 

## SECTION 3 : X\&Y INTRO

> **Philosophy Section Layout**
- Desktop: two‑column layout `.philosophy-row` with image left (`.col-6`) and text right (`.col-6`).
- Mobile: stack image above text.
- Image container `.philosophy-img` uses `object-fit: cover; width: 100%; height: auto;`.
- Text block `.philosophy-text` includes a heading (`h2`) 36/28/22px and paragraph body 18/16/14px.
- The three philosophy boxes originally described are collapsed into a single cohesive narrative block; use a carousel or fade‑in animation for mobile if needed.


> **Visual Overview**: Philosophy section with heading “OUR PHILOSOPHY”, interior photo, gold badge, and paragraph describing the restaurant’s ethos.

3 boxes to communicate the philosophy   
BOX 1:   
BOLD : X   
SMALLER TEXT : YOU   
BODY : Bring your hunger, your laptop, your stories 

BOX 2 :   
BOLD : &   
BODY : Food is better when it’s shared 


BOX 3 :  
BOLD : Y  
SMALLER TEXT : US   
BODY : We bake from scratch, every single day 

Here, these texts can appear and disappear or even change (3-4 texts on rotation, fading in and out) 

## SECTION 4 : SIGNATURE DISHES

> **Dish Card Grid**
- Grid `.dish-grid` with four cards.
- Desktop: 4‑col (`.col-3`), Tablet: 2‑col (`.col-6`), Mobile: 1‑col (`.col-12`).
- Card structure:
  ```html
  <div class="dish-card">
    <img src="assets/images/dish1.jpg" alt="Dish name" class="dish-img"/>
    <h3 class="dish-name">Dish Name</h3>
    <p class="dish-desc">One‑line description.</p>
  </div>
  ```
- Image ratio 4:3, `object-fit: cover`.
- Typography: `h3` 24/20/18px, description 16/14/12px.
- Hover effect: slight scale (1.03) and shadow.


> **Visual Overview**: Signature dishes displayed as large cards showing an image, dish name, and a brief description. 

4 large food cards (Bakery item, dessert, food, breakfast dish)   
Image  
Below : dish name   
Below : one line description

Dish 1 :   
IMAGE   
EGGS BENEDICT   
Poached eggs. Hollandaise. English muffin.

Dish 2 :   
IMAGE   
BURNT CHILLI OIL SPAGHETTI   
Spaghetti. Chilli Oil. Parmesan

Dish 3 :   
IMAGE   
NEW YORK CHEESECAKE   
Cream Cheese. Graham Base. Vanilla 

Dish 4 :   
IMAGE   
BUTTER CROISSANT   
Butter. Flour. Salt

## SECTION 5 : ABOUT US

> **Split Layout**
- Desktop: two columns `.about-row` – video left (`.col-6`) and text right (`.col-6`).
- Mobile: stack with text first then video.
- Video component uses `<video>` with controls hidden, auto‑play muted loop, and a fallback poster.
- Text block includes a short paragraph (`p`) 18/16/14px and a call‑to‑action button.
- Background colour `var(--color-background)` with subtle padding.


> **Visual Overview**: Split layout with a short video of staff on the left and brief text on the right (desktop); on mobile, text on top and video below. 

LEFT SIDE : SHORT VIDEO OF STAFF WORKING IN THE KITCHEN   
RIGHT SIDE : TEXT (3-4 LINES) 



## SECTION 6 : INSTAGRAM

> **Responsive Image Grid**
- Use CSS Grid `.insta-grid` with `grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));`.
- Images `assets/images/insta‑*.jpg` fill cells, maintain square aspect via `aspect-ratio: 1`.
- Gap 0.5rem; images have hover overlay showing likes.
- Grid adapts automatically: 4‑col desktop, 3‑col tablet, 2‑col mobile.


> **Visual Overview**: Instagram feed showing 6‑9 images in a responsive grid. 

6-9 images

## FOOTER :

> **Footer Layout**
- Full‑width container with background `var(--color-primary)` and text `#fff`.
- Three columns on desktop: branding/logo, quick links, social icons.
- Stack vertically on mobile.
- Include minimal navigation links (`Home`, `About`, `Contact`).
- Use `padding: 2rem 1rem;` and a subtle top border.


> **Visual Overview**: Footer with branding image and minimal navigation links. 

![][image2]

# ABOUT US PAGE 

BANNER IMAGE OF THE TEAM EITHER BAKING OR COOKING   
TEXT EITHER ON THE IMAGE OR JUST BELOW : “Food made with intention. A place built with love”

## SECTION FOR ORIGIN STORY 

TIMELINE ON THE LEFT SIDE, RIGHT SIDE TO BE AN IMAGE OF VASUDHA GOENKA   
CONTENT FOR THE TIMELINE TO BE SHARED   
MENTION DETAILS OF HER BACKGROUND IN NUTRITION

**Value Strip : 3 things we stand for** 

**![][image3]**  
Card 1 :   
We bake like no one's watching the clock  
Our sourdough ferments for 18 hours. Our croissants are laminated by hand, layer by layer. We could cut corners \- we've just never wanted to. The people who sit at our tables deserve the real thing, not a version of it.  
"The difference between good and extraordinary is always time."  
Card 2 :   
Built for Kolkata, by someone who couldn't stop thinking about it  
Vasudha came back to this city with one question she couldn't shake \- why isn't there a place here that takes food this seriously? X\&Y is the answer she spent years building. Every dish, every room, every detail is rooted in that original obsession.  
"This city deserved it. So we built it."

Card 3 :   
Your table is yours for as long as you need it  
We don't hover. We don't rush. If you came in for breakfast and you're still here at lunch \- perfect. Some of the best things that have ever happened to people happened slowly, over a second cup of coffee.  
"The best café is the one you never want to leave."

Timeline : 

2023  
THE TRAINING 

The foundation  
Vasudha graduates and comes home with a question Kolkata couldn't answer yet.

She'd spent years learning what it means to make food properly \-  the patience, the precision, the refusal to rush. She came back to this city and looked for a place that held those same standards. She couldn't find one. So she decided to build it herself.

"If it doesn't exist here, maybe that's the point."

FEB 2024 

ALIPORE  
The first door

X\&Y opens in Alipore. One room. A menu curated to make every dish perfect.

The sourdough starter went in before anything else. The croissants were laminated by hand. The menu was curated with love and precision \- every dish perfected through rounds of experimenting, tasting. Within weeks, people were arriving before we unlocked the door.

FEB 2025   
SALT LAKE   
We didn't change the menu. We didn't need to. What Alipore had built was worth bringing to Sector 2 exactly as it was \- the same croissants, the same hollandaise, the same belief in doing a small number of things properly. Salt Lake was never about doing something different. It was about more people being able to find us. 

JULY 2025   
HUNGERFORD STREET  
Hungerford Street sits in one of Kolkata's most central neighbourhoods \- close enough to schools, colleges, and offices that it became a natural in-between place almost immediately. Somewhere to decompress after class, stretch a lunch break, or simply sit with good food and nowhere urgent to be. The essence is the same X\&Y. The room is built for exactly the kind of easy, unplanned visit that a central location invites. 

# Locations  

All 3 in this manner :   
![][image4]

Testimonials : 

Lovely ambience and interior. The ample space and seating area won our hearts. Courteous and humble staff.  \- Nivedita Majumdar

If you’re looking for a café in Alipore that serves great coffee, fresh bakery items, and offers smooth service, X\&Y is definitely worth a visit. \- Naman Agarwal   
I have recently visited this new bake house bistro and had a perfect dining experience. This place has beautiful aesthetic corners that make for a perfect dining experience. Every dish was packed with flavor, and you could tell that only the freshest ingredients were used. From appetizers to desserts, each bite was a delight. The menu offers a great variety, with both classic comfort food and innovative creations that truly stand out. \- Chirasree Das 

Once tried their pizza at a friend’s house and all 3 were so good, that I simply had to go and eat at the cafe/restaurant. I must say, I was not disappointed. The food was absolutely delicious \- everything we tried \- vegetarian and meat pizzas, tortellini, ravioli \- all so good. \- Natalia Pote

ALLIPORE

Phone: +91 92309 85229
Hours: 11 AM – 11 PM
Address:
Ground Floor, 6, Burdwan Rd,
Alipore, Kolkata, West Bengal
700027

SALT LAKE

Phone: +91 82409 68898
Hours: 12 PM – 11:30 PM
Address:
CG-220, Ground Floor, Sector 2,
Salt Lake City, Kolkata – 700091

ELGIN ROAD

Phone: +91 82403 94550
Hours: 8 AM – 10 PM
Address:
10E, Hungerford St, Elgin,
Kolkata, West Bengal 700017
