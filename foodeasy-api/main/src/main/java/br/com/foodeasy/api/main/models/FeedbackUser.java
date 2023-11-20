package br.com.foodeasy.api.main.models;

import org.springframework.stereotype.Component;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Component
public class FeedbackUser {

    private String message;
}
