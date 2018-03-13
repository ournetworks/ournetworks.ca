<!-- Embed Event Section -->
  <section class="events-home-grid">
      <div class="row">
        {% for event in events %}
          {% include event-logic-loop.html %}
          {% if post_year > now_year or post_day >= now_day and post_year >= now_year %}
            {% if event_count < 1 %}
              {% assign event_count = event_count | plus: 1 %}
              {% include event.html event=post event-type="upcoming" %}
            {% endif %}
          {% endif %}
        {% endfor %}
      </div>>
  </section>
