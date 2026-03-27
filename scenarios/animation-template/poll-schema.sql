create table if not exists public.prototype_animation_poll_votes (
  id bigint generated always as identity primary key,
  poll_key text not null,
  choice text not null check (choice in ('yes', 'no')),
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.prototype_animation_poll_votes enable row level security;

create policy "Anyone can read prototype animation poll votes"
on public.prototype_animation_poll_votes
for select
to anon, authenticated
using (true);

create policy "Anyone can insert prototype animation poll votes"
on public.prototype_animation_poll_votes
for insert
to anon, authenticated
with check (
  poll_key = 'base_hit_to_right_field_animation'
  and choice in ('yes', 'no')
);
