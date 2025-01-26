package com.example.adobe;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class RomanNumeralController {
    int MAX_VALUE = 4000;
    /**
     * RomanNumeralController 
     * Given an input number returns the corresponding roman numeral.
     * 
     * Currently does not  support roman numerals greater than 10,000,000.
     * 
     * For example:
     *      /romannumeral?query=6
     *      {
     *          numeral: 6
     *          romanNumeral: VI
     *      }
     *
     * @param  query input to convert to roman numeral 
     * @return       json body that contains original number and roman numeral conversion. 
     */
    @RequestMapping("/romannumeral")
    public RomanNumeral romanNumeral(@RequestParam(value="query", defaultValue="1") Integer query) {
        if (query < 1 || query >= MAX_VALUE) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Requested roman numeral is not between 1 and " +MAX_VALUE);
        }
        return new RomanNumeral(query);
    }
}