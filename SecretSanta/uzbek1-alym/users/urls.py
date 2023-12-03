from rest_framework import routers
from .api import UserProfileViewSet
from django.urls import path

from . import views

router = routers.DefaultRouter()
router.register('api/users',UserProfileViewSet,'users')

urlpatterns = router.urls

urlpatterns = [
    path("", views.users_list),
]