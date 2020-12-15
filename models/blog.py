# -*- coding: utf-8 -*-

from odoo import models, fields, api

class blog(models.Model):
    _name = 'ecom_blog.ecom_blog'    
    _description = 'Class'

    image = fields.Binary(string="Image")
    name = fields.Char()
    content = fields.Html(string='content')
    description = fields.Text()

