class GamesController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
		# https://facebook.github.io/react/tutorial/tutorial.html

		# https://codepen.io/gaearon/pen/oWWQNa?editors=0010
	

	end

	def create
		binding.pry

		respond_to do |format|
			format.html
			format.js
			format.json { render json: {} }
		end

	end

	private


end



