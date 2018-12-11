class Api::BlogsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :create]
  before_action :set_blog, only: [:show, :update, :destroy]

  def index
    render json: Blog.all 
    #render json: Blog.get_blogs
  end

  def show
    render json @review
  end

  def create
    blog = Blog.create(blog_params)
    render json: blog
  end

  def update
  end

  def destroy
  end

  private
  def set_blog
    @blog = Blog.find(params[:id])
  end

  def blog_params
    params.require(:blog).permit(:title, :author, :body)
  end

end
