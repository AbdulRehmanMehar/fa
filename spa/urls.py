from django.urls import path

from .views import index, load_js_chunk

urlpatterns = [
    path('js/<str:chunk>', load_js_chunk, name='load_js_chunk'),
    path('', index, name='index'),
]