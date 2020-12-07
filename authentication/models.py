from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class TheAccountManager(BaseUserManager):

    def _validate_entities(self, firstname, lastname, email, username, gender, password):
        if not firstname:
            raise ValueError('Firstname cannot be empty')
        if not lastname:
            raise ValueError('Lastname cannot be empty')
        if not email:
            raise ValueError('Email cannot be empty')
        if not username:
            raise ValueError('Username cannot be empty')
        if not gender:
            raise ValueError('Gender cannot be empty')
        if not password:
            raise ValueError('Password cannot be empty')

    def create_user(self, firstname, lastname, email, username, gender, password):
        self._validate_entities(firstname, lastname, email, username, gender, password)

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            firstname=firstname,
            lastname=lastname,
            password=password,
            gender=gender
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, firstname, lastname, email, username, gender, password):
        self._validate_entities(firstname, lastname, email, username, gender, password)

        user = self.create_user(
            email=self.normalize_email(email),
            username=username,
            firstname=firstname,
            lastname=lastname,
            gender=gender,
            password=password
        )

        user.is_admin = True
        user.is_staff = True
        user.is_active = True
        user.is_superuser = True

        user.set_password(password)
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    email = models.EmailField(unique=True, max_length=60)
    username = models.CharField(max_length=50, unique=True)
    about = models.CharField(max_length=500)
    gender = models.CharField(max_length=10)
    location = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    display_picture = models.CharField(max_length=200)
    cover_picture = models.CharField(max_length=200)

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstname', 'lastname', 'username', 'gender']

    objects = TheAccountManager()

    def __str__(self):
        return f'<Account {self.email} {self.username}/>'

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

