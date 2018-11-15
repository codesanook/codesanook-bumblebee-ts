	public class Given_text_field 
	{
		[OneTimeSetUp]
		public void Init()
		{
				.NavigateTo<DateFieldPage>(String.Format("{0}/Content/TextField.html", BaseUrl));
		}

		[OneTimeTearDown]
		public void Dispose()
		{
			Threaded<Session>
				.End();
		}

		[Test]
		public void When_entering_text_Then_text_should_work()
		{
			const string expectedText = "This is the text.";

			Threaded<Session>
				.CurrentBlock<TextFieldPage>()
				.Text.EnterText(expectedText)
				.VerifyThat(x => x.Text.Text.Should().Be(expectedText));
		}
	}
}
