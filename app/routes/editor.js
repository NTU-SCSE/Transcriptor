import Route from '@ember/routing/route';
import convert from 'npm:xml-js'
import { inject as service } from '@ember/service';

export default Route.extend({
  // loader: service(),

});

    // var xml = e.target.result;
    // var json = convert.xml2json(xml, {compact: true, spaces: 4});
    //
    // var obj = JSON.parse(json);
    // let segmentsList = obj.AudioDoc.SegmentList.SpeechSegment;
    // let notes = [];
    // let spanIndex = 0;
    // function getColor(score) {
    //   if(parseFloat(score) < 0.7) {
    //     return 'red';
    //   }
    //   else {
    //     return '';
    //   }
    // }
    // segmentsList = segmentsList.sort(function(a,b) {
    //   return (parseFloat(a['_attributes']['stime']) - parseFloat(b['_attributes']['stime']));
    // });
    // segmentsList.forEach(function(segment) {
    //   // console.log(segment.Word.length);
    //   let sentence = segment.Word;
    //   if (sentence.length) {
    //     //handle sentences
    //     let line = "";
    //     sentence.forEach(function(word) {
    //       // console.log("Start Time", word['_attributes']['stime']);
    //       line = `${line} <span class='transcriptor ${getColor(word['_attributes']['score'])}' id = 'o-${spanIndex++}' data-stime='${parseFloat(word['_attributes']['stime'])}' data-etime='${parseFloat(word['_attributes']['stime']) + parseFloat(word['_attributes']['dur'])}'>${word['_text']}</span>`;
    //     });
    //     // based on start and end times of words
    //     // o = {begin: sentence[0]['-stime'], children: [], end: String((parseFloat(sentence[sentence.length-1]['-stime'])+ parseFloat(sentence[sentence.length-1]['-dur']))), id: notes.length, language: 'eng', lines: [line] }
    //     let o = {begin: segment['_attributes']['stime'], children: [], end: String((parseFloat(segment['_attributes']['stime'])+ parseFloat(segment['_attributes']['dur']))), id: String(notes.length), language: 'eng', lines: [line] };
    //
    //     notes.push(o);
    //   }
    //   else {
    //     //handle single word sentences
    //     //based on start and end times of words
    //     // o = {begin: sentence['-stime'], children: [], end: String((parseFloat(sentence['-stime'])+ parseFloat(sentence['-dur']))), id: notes.length, language: 'eng', lines: [sentence['#text']] }
    //     let line = `<span class='transcriptor ${getColor(sentence['_attributes']['score'])}' id = 'o-${spanIndex++}' data-stime='${parseFloat(sentence['_attributes']['stime'])}' data-etime='${parseFloat(sentence['_attributes']['stime']) + parseFloat(sentence['_attributes']['dur'])}'>${sentence['_text']}</span>`
    //     let o = {begin: segment['_attributes']['stime'], children: [], end: String((parseFloat(segment['_attributes']['stime'])+ parseFloat(segment['_attributes']['dur']))), id: String(notes.length), language: 'eng', lines: [line] };
    //     notes.push(o);
    //   }
    //
    //
    // });

