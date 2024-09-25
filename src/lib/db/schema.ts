import { integer, pgEnum, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { relations } from 'drizzle-orm';

export const itemsCategories = pgEnum(
    'categories', [
    'Ассеты',
    'Музыка',
    'SFX',
    'Анимация',
]);

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: text('username').notNull(),
    email: text('email'),
    password: text('password').notNull(),
    phone: text('phone'),
    profileId: integer('profileId').references(() => profiles.id).notNull(),
    avatar: text('avatar'),
});

export const usersRelations = relations(users, ({ many, one }) => ({
    profile: one(profiles, {
        fields: [users.profileId],
        references: [profiles.id],
        relationName: "profile"
    }),
}))

export const profiles = pgTable('profiles', {
    id: serial('id').primaryKey(),
    userId: integer('userId').references(() => users.id).notNull(),
});

export const profilesRelations = relations(profiles, ({ many, one }) => ({
    shops: many(shops, { relationName: "shops" }),
    purchases: many(items, { relationName: "purchases" }),
    savedItems: many(items, { relationName: "savedItem" }),
    user: one(users, {
        fields: [profiles.userId],
        references: [users.id],
        relationName: "profile"
    }),
}))

export const shops = pgTable('shops', {
    id: serial('id').primaryKey(),
    ownerId: integer('ownerId').references(() => users.id).notNull(),
    name: text('name').notNull(),
    avatar: text('avatar'),
    artwork: text('artwork'),
    color: text('color'),
})

export const items = pgTable('items', {
    id: serial('id').primaryKey(),
    shopId: integer('shopId').references(() => shops.id).notNull(),
    name: text('name').notNull(),
    price: integer('price').notNull(),
    category: itemsCategories('category'),
    description: text('description'),
    views: integer('views').default(0).notNull()
})
