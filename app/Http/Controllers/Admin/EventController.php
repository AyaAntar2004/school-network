<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Event;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    public function index(Request $request): Response
    {
        $search = trim((string) $request->query('q', ''));

        $events = Event::forPage()
            ->when($search !== '', fn ($query) => $query->where('title', 'like', "%{$search}%"))
            ->orderByDesc('year')
            ->orderByDesc('id')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('admin/events/index', [
            'events' => $events,
            'search' => $search,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/events/form', ['event' => null]);
    }

    public function store(Request $request): RedirectResponse
    {
        Event::create($this->validated($request));

        return redirect()->route('admin.events.index');
    }

    public function edit(Event $event): Response
    {
        return Inertia::render('admin/events/form', [
            'event' => [
                'id' => $event->id,
                'year' => $event->year,
                'title' => $event->title,
                'date' => $event->date_text,
                'place' => $event->place,
            ],
        ]);
    }

    public function update(Request $request, Event $event): RedirectResponse
    {
        $event->update($this->validated($request));

        return redirect()->route('admin.events.index');
    }

    public function destroy(Event $event): RedirectResponse
    {
        $event->delete();

        return redirect()->route('admin.events.index');
    }

    /** The form calls the date "date"; the column is date_text. */
    private function validated(Request $request): array
    {
        $data = $request->validate([
            'year' => ['required', 'integer', 'between:1990,2100'],
            'title' => ['required', 'string', 'max:255'],
            'date' => ['nullable', 'string', 'max:255'],
            'place' => ['nullable', 'string', 'max:255'],
        ]);

        return [
            'year' => $data['year'],
            'title' => $data['title'],
            'date_text' => ($data['date'] ?? null) ?: null,
            'place' => ($data['place'] ?? null) ?: null,
        ];
    }
}
