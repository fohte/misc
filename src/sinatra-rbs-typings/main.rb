# frozen_string_literal: true

require 'sinatra'

module Misc
  class App < Sinatra::Base
    def response
      return nil
      'ut this in your pipe & smoke it!'
    end

    get '/frank-says' do
      response
    end
  end
end
