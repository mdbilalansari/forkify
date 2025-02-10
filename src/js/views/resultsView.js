import { PreviewView } from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';
}

export default new ResultsView();
