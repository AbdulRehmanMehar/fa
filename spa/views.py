import mimetypes
import os
from wsgiref.util import FileWrapper

from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, template_name='index.html')


def load_js_chunk(request, chunk):
    content = open(f'spa/public/js/{chunk}', errors='ignore').read()
    return HttpResponse(content, content_type='application/javascript')
