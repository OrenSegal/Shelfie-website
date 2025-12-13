# Iconography Guide (ICONS.md)

This document provides the specification for all icons used within the Shelfie application. It serves as the single source of truth for designers and developers to ensure visual consistency and clarity.

## Philosophy 📜

Our icons are designed to be **simple, clear, and instantly recognizable**. They are always rendered as monochrome (single-color) assets from `.png` files. **Color is never baked into the icon file itself.** Instead, color is applied dynamically in the app using the `AppColors` theme primitives, allowing icons to adapt to different states (like active or disabled) and themes.

## Table of Contents

- [Asset Structure](#asset-structure)
- [Icon Types](#icon-types)
- [Usage](#usage)
- [Implementation Details](#implementation-details)
- [Adding New Icons](#adding-new-icons)

## Asset Structure

All icon assets are organized in the following directory structure:

```
assets/icons/
├── appliances/        # Kitchen appliances (oven, blender, etc.)
├── diets/             # Dietary restrictions (vegan, gluten-free, etc.)
├── food_rooms/        # Storage locations (pantry, fridge, etc.)
├── gamification/      # Achievement and game elements
├── ingredient_types/  # Categories of ingredients
├── ingredients/       # Individual food items
├── interface/         # UI elements
├── kitchen_tools/     # Cooking utensils
├── meal_categories/   # Types of dishes
├── meal_types/        # Meal times (breakfast, lunch, etc.)
└── nutrition/         # Nutritional information
```

## Icon Types

| Type                | Path                             | Fallback Icon                      | Description                                   |
| ------------------- | -------------------------------- | ---------------------------------- | --------------------------------------------- |
| Appliance           | `assets/icons/appliances/`       | `Icons.kitchen_outlined`           | Kitchen appliances like ovens, blenders, etc. |
| Diet                | `assets/icons/diets/`            | `Icons.eco_outlined`               | Dietary restrictions and preferences          |
| Meal Category       | `assets/icons/meal_categories/`  | `Icons.tapas_outlined`             | Types of dishes                               |
| Food Room           | `assets/icons/food_rooms/`       | `Icons.inventory_2_outlined`       | Storage locations                             |
| Gamification        | `assets/icons/gamification/`     | `Icons.emoji_events_outlined`      | Achievement and game elements                 |
| Ingredient          | `assets/icons/ingredients/`      | `Icons.restaurant_menu_outlined`   | Food items                                    |
| Ingredient Category | `assets/icons/ingredient_types/` | `Icons.category_outlined`          | Types of ingredients                          |
| Interface           | `assets/icons/interface/`        | `Icons.info_outline`               | UI elements                                   |
| Kitchen Tool        | `assets/icons/kitchen_tools/`    | `Icons.handyman_outlined`          | Cooking utensils                              |
| Meal Type           | `assets/icons/meal_types/`       | `Icons.dinner_dining_outlined`     | Meal times                                    |
| Nutrition           | `assets/icons/nutrition/`        | `Icons.health_and_safety_outlined` | Nutritional information                       |

## Usage

### Basic Usage

```dart
// Appliance icon
AppIcons.appliance('oven', size: 32);

// Diet icon
AppIcons.diet('vegan', color: Colors.green);

// Food icon with fallback logic
FoodIcon(
  name: 'Granny Smith Apples',
  coreName: 'apple',
  category: 'fruit',
  size: 40,
);
```

### Available Icons

#### Appliances

- `air_fryer.png`
- `baking_cooling_rack.png`
- `baking_sheet.png`
- `bbq.png`
- `blender.png`
- `cake_pan.png`
- `cutting_board.png`
- `electric_kettle.png`
- `frying_pan.png`
- `grinder.png`
- `kettle.png`
- `microwave.png`
- `muffin_tin.png`
- `oven.png`
- `sous_vide.png`
- `stand_mixer.png`
- `stove.png`
- `toaster.png`
- `waffle_maker.png`
- `wok.png`

#### Diets

- `dairy_free.png`
- `egg_free.png`
- `fish_free.png`
- `gluten_free.png`
- `halal.png`
- `heart_healthy.png`
- `ketogenic.png`
- `kosher.png`
- `lactose_intolerant.png`
- `low_carb.png`
- `low_sodium.png`
- `nut_free.png`
- `nutella.png`
- `paleo.png`
- `peanut_free.png`
- `pesca.png`
- `pescatarian.png`
- `shellfish_free.png`
- `soy_free.png`
- `sugar_free.png`
- `vegan.png`
- `vegetarian.png`

#### Food Rooms

- `bread_box.png`
- `breakroom_fridge.png`
- `cookie.png`
- `freezer.png`
- `fridge.png`

## Implementation Details

### AppIcons Class

The `AppIcons` class provides a semantic API for accessing all application icons. It includes methods for each icon type:

- `appliance()` - Kitchen appliances
- `diet()` - Dietary restrictions
- `mealCategory()` - Dish categories
- `foodRoom()` - Storage locations
- `gamification()` - Achievement icons
- `interface()` - UI elements
- `kitchenTool()` - Cooking utensils
- `mealType()` - Meal times
- `nutrition()` - Nutritional information
- `ingredient()` - Food items
- `food()` - Smart food icon with fallback system

### FoodIcon Widget

The `FoodIcon` widget provides a multi-level fallback system for food icons. It attempts to find the most appropriate icon in this order:

1. The specified `coreName`
2. The singular form of the `name`
3. The first word of the `name`
4. The specified `category`

## Adding New Icons

### Naming Convention

- Use lowercase
- Separate words with underscores
- No special characters
- Maximum 3 words
- Use singular form for ingredients

Example transformations:

- "Food Processor" → `food_processor.png`
- "Granny Smith Apples" → `granny_smith_apples.png`
- "Measuring cups" → `measuring_cup.png`

### Steps to Add Icons

1. Place the icon in the appropriate category directory under `assets/icons/`
2. Follow the naming convention
3. The icon will be automatically available through the `AppIcons` class
4. For food icons, ensure the name is in singular form
