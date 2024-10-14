from django.urls import path
from . import views

urlpatterns = [
    path("getuser/", views.UserProfileView.as_view(), name="get-user"),
]
