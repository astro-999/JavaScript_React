from django.urls import path
from . import views

urlpatterns = [
    path('api/users/', views.user_list, name='user-list'),
    path('api/users/create/', views.user_create, name='user-create'),
    path('api/users/<int:pk>/', views.user_detail, name='user-detail'),
    path('api/users/<int:pk>/update/', views.user_update, name='user-update'),
    path('api/users/<int:pk>/delete/', views.user_delete, name='user-delete'),
]